const { WebcController } = WebCardinal.controllers;

const cscServices = require('csc-services');
const OrderService = cscServices.OrderService;
const ShipmentService = cscServices.ShipmentService;
const viewModelResolver = cscServices.viewModelResolver;

export default class EditShipmentController extends WebcController {

	constructor(...props) {
		super(...props);

		this.ordersService = new OrderService(this.DSUStorage);
		this.shipmentsService = new ShipmentService(this.DSUStorage);

		this.attachEventHandlers();
		this.initViewModel();
	}

	attachEventHandlers() {
		this.attachNavigationHandlers();
		this.attachFormActions();
	}

	attachFormActions() {
		this.onTagClick('form:reset', (model, target, event) => {
			event.preventDefault();
			event.stopImmediatePropagation();

			this.model.shipmentModel.form = viewModelResolver('shipment').form;
		});

		this.onTagClick('form:submit', () => {
			const shipmentData = this.prepareShipmentData();
			console.log(JSON.stringify(shipmentData, null, 2));
			this.send('confirmed', shipmentData);
		});
	}

	makeStepActive(stepId, stepHolderId) {
		this.model.wizard.forEach((item) => {
			this.querySelector('#' + item.id).classList.remove('step-active');
			this.hideStep(item.holder_id);
		});

		this.querySelector('#' + stepId).classList.add('step-active');
		this.showStep(stepHolderId);
	}

	attachNavigationHandlers() {
		this.onTagEvent('step-1', 'click', () => {
			this.makeStepActive('step-1', 'step-1-wrapper');
		});

		this.onTagEvent('step-2', 'click', () => {
			this.makeStepActive('step-2', 'step-2-wrapper');
		});

		this.onTagEvent('from_step_1_to_2', 'click', () => {
			this.makeStepActive('step-2', 'step-2-wrapper');
		});
	}

	hideStep(item) {
		const el = document.getElementById(item);
		if (el) {
			el.classList.add('step-hidden');
		}
	}

	showStep(item) {
		const el = document.getElementById(item);
		if (el) {
			el.classList.remove('step-hidden');
		}
	}

	transformOrderData(data) {
		if (data) {
			data.delivery_date = this.getDateTime(data.deliveryDate);

			return data;
		}

		return {};
	}

	getDateTime(str) {
		const dateTime = str.split(' ');
		return {
			date: dateTime[0],
			time: dateTime[1]
		};
	}

	getWizardForm() {
		return [
			{ id: 'step-1', holder_id: 'step-1-wrapper', name: 'Shipment Details', visible: true, validated: false },
			{ id: 'step-2', holder_id: 'step-2-wrapper', name: 'Confirmation' }
		];
	}

	async initViewModel() {
		this.model = {
			orderModel: viewModelResolver('order'),
			shipmentModel: viewModelResolver('shipment')
		};

		//all order fields are disabled
		for (let prop in this.model.orderModel.form.inputs) {
			this.model.orderModel.form.inputs[prop].disabled = true;
		}

		this.model.shipmentModel.shipment = await this.shipmentsService.getShipment(this.model.keySSI);
		this.model.orderModel.order = await this.ordersService.getOrder(this.model.shipmentModel.shipment.orderSSI);
		this.model.orderModel.order = { ...this.transformOrderData(this.model.orderModel.order) };

		this.model.wizard = this.getWizardForm();
	}

	prepareShipmentData() {
		const shipmentFormData = this.model.toObject('shipmentModel.form');

		return {
			shipperId: shipmentFormData.shipperId.value,
			origin: shipmentFormData.origin.value,
			type: shipmentFormData.type.value,
			scheduledPickupDate: {
				date: shipmentFormData.pickupDate.value,
				time: shipmentFormData.pickupTime.value
			},
			dimension: {
				width: shipmentFormData.dimension.width.value,
				height: shipmentFormData.dimension.height.value,
				length: shipmentFormData.dimension.length.value
			},
			specialInstructions: shipmentFormData.specialInstructions.value,
			shippingConditions: shipmentFormData.shippingConditions.value
		};
	}
}