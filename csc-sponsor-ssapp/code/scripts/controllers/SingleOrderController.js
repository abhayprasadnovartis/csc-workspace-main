const { WebcController } = WebCardinal.controllers;

//Services
const cscServices = require('csc-services');

//Import
const OrdersService = cscServices.OrderService;
const momentService  = cscServices.momentService;
const {orderStatusesEnum} = cscServices.constants.order;

export default class SingleOrderController extends WebcController {
    constructor(...props) {
        super(...props);

        this.model = {
            accordion: {
                order_details: {
                    name: 'Order Details',
                    tag: 'order_details_accordion',
                    id: 'order_details_accordion',
                    isOpened: true,
                },
                attached_documents: {
                    name: 'Attached Documents',
                    tag: 'attached_documents_accordion',
                    id: 'attached_documents_accordion',
                    isOpened: false,
                },
                order_comments: {
                    name: 'Order Comments',
                    tag: 'order_comments_accordion',
                    id: 'order_comments_accordion',
                    isOpened: false,
                },
            },
            form: {
                inputs: {
                    sponsor_id: {
                        label: 'Sponsor ID',
                        name: 'sponsor_id',
                        required: true,
                        placeholder: 'Sponsor ID...',
                        value: '',
                    },
                    delivery_date: {
                        label: 'Delivery Date/Time',
                        date: {
                            name: 'delivery_date',
                            required: true,
                            value: '',
                        },
                        time: {
                            name: 'delivery_time',
                            required: true,
                            value: '',
                        },
                    },
                    target_cmo_id: {
                        label: 'Target CMO ID',
                        name: 'target_cmo_id',
                        placeholder: 'Select Target CMO ID...',
                        required: true,
                        options: [
                            { label: 'ID 1', value: '1' },
                            { label: 'ID 2', value: '2' },
                            { label: 'ID 3', value: '3' },
                        ],
                    },
                    study_id: {
                        label: 'Study ID',
                        name: 'study_id',
                        required: true,
                        placeholder: 'e.g ABC123X56789',
                        value: '',
                    },
                    order_id: {
                        label: 'Order ID',
                        name: 'order_id',
                        required: true,
                        placeholder: 'e.g O-000001234',
                        value: '',
                    },
                    kit_id_list: {
                        label: 'Kit ID List (xlsx)',
                        name: 'kit_id_list',
                        required: true,
                        placeholder: 'No File',
                        value: '',
                    },
                    site_id: {
                        label: 'Site ID',
                        name: 'site_id',
                        placeholder: 'Select Site ID...',
                        required: true,
                        options: [
                            { label: 'Site ID 1', value: '1' },
                            { label: 'Site ID 2', value: '2' },
                            { label: 'Site ID 3', value: '3' },
                        ],
                    },
                    site_region_id: {
                        label: 'Site Region ID (Autofilled)',
                        name: 'site_region_id',
                        required: true,
                        placeholder: '',
                        value: '',
                    },
                    site_country: {
                        label: 'Site Country (Autofilled)',
                        name: 'site_country',
                        required: true,
                        placeholder: '',
                        value: '',
                    },
                    temperature_comments: {
                        label: 'Temperature Comments',
                        name: 'temperature_comments',
                        required: true,
                        placeholder: 'e.g Do not freeze',
                        value: '',
                    },
                    keep_between_temperature: {
                        min: {
                            label: 'Min Temperature (°C)',
                            name: 'keep_between_temperature_min',
                            required: true,
                            placeholder: '',
                            value: '',
                        },
                        max: {
                            label: 'Max Temperature (°C)',
                            name: 'keep_between_temperature_max',
                            required: true,
                            placeholder: '',
                            value: '',
                        },
                    },
                    add_comment: {
                        label: 'Add a Comment',
                        name: 'add_comment',
                        required: true,
                        placeholder: 'Add a comment....',
                        value: '',
                    },
                },
                docs: {},
                attachment: {
                    label: 'Select files',

                    listFiles: true,
                    filesAppend: false,
                    files: [],
                },
                documents: [
                    { name: 'Document Name 1.pdf', attached_by: 'Novartis', date: '03-06-2021, 00:00', link: '' },
                    { name: 'Document Name 2.pdf', attached_by: 'Novartis', date: '03-06-2021, 00:25', link: '' },
                ],
                comments: [{ content: 'This is the comment that sponsor user wrote.', date: '03-06-2021, 01:00' }],
            },
        };

        let {keySSI } = this.history.location.state;
        this.ordersService = new OrdersService(this.DSUStorage);

        this.model.keySSI = keySSI;

        this.attachEvents();

        this.init();

        //Init Check on Accordion Items
        if (this.model.accordion) {
            let keys = Object.keys(this.model.accordion);
            if (keys) {
                keys.forEach((key) => {
                    if (this.model.accordion[key].isOpened) {
                        this.openAccordionItem(this.model.accordion[key].id);
                    }
                });
            }
        }

        this.onTagEvent('order_details_accordion', 'click', (e) => {
            this.toggleAccordionItem('order_details_accordion');
            this.model.accordion.order_details.isOpened = !this.model.accordion.order_details.isOpened;
        });

        this.onTagEvent('attached_documents_accordion', 'click', (e) => {
            this.toggleAccordionItem('attached_documents_accordion');
            this.model.accordion.attached_documents.isOpened = !this.model.accordion.attached_documents.isOpened;
        });

        this.onTagEvent('order_comments_accordion', 'click', (e) => {
            this.toggleAccordionItem('order_comments_accordion');
            this.model.accordion.order_comments.isOpened = !this.model.accordion.order_comments.isOpened;
        });

        this.onTagEvent('history-button', 'click', (e) => {
            this.onShowHistoryClick();
        });

        this.onTagEvent('review-order', 'click', (e) => {
            this.navigateToPageTag('review-order', {
                order: JSON.parse(JSON.stringify(this.model.order)),
            });
        });
    }

    toggleAccordionItem(el) {
        const element = document.getElementById(el);

        const icon = document.getElementById(el + '_icon');
        element.classList.toggle('accordion-item-active');
        icon.classList.toggle('rotate-icon');

        const panel = element.nextElementSibling;

        if (panel.style.maxHeight === '1000px') {
            panel.style.maxHeight = '0px';
        } else {
            panel.style.maxHeight = '1000px';
        }
    }

    openAccordionItem(el) {
        const element = document.getElementById(el);
        const icon = document.getElementById(el + '_icon');

        element.classList.add('accordion-item-active');
        icon.classList.add('rotate-icon');

        const panel = element.nextElementSibling;
        panel.style.maxHeight = '1000px';

        this.closeAllExcept(el);
    }

    closeAccordionItem(el) {
        const element = document.getElementById(el);
        const icon = document.getElementById(el + '_icon');

        element.classList.remove('accordion-item-active');
        icon.classList.remove('rotate-icon');

        const panel = element.nextElementSibling;
        panel.style.maxHeight = '0px';
    }

    closeAllExcept(el) {
        const element = document.getElementById(el);

        if (el === 'order_details_accordion') {
            this.closeAccordionItem('attached_documents_accordion');
            this.closeAccordionItem('order_comments_accordion');
        }

        if (el === 'attached_documents_accordion') {
            this.closeAccordionItem('order_details_accordion');
            this.closeAccordionItem('order_comments_accordion');
        }

        if (el === 'order_comments_accordion') {
            this.closeAccordionItem('attached_documents_accordion');
            this.closeAccordionItem('order_details_accordion');
        }
    }

    onShowHistoryClick() {
        this.createWebcModal({
            template: 'historyModal',
            controller: 'HistoryModalController',
            model: { order: this.model.order },
            disableBackdropClosing: false,
            disableFooter: true,
            disableHeader: true,
            disableExpanding: true,
            disableClosing: false,
            disableCancelButton: true,
            expanded: false,
            centered: true,
        });

        console.log('Show History Clicked');
    }

    async init() {
        const order = await this.ordersService.getOrder(this.model.keySSI);
        this.model.order = order;
        this.model.order = {...this.transformData(this.model.order)};
        this.model.order.delivery_date = {
            date: this.getDate(this.model.order.deliveryDate),
            time: this.getTime(this.model.order.deliveryDate),
        };
    }

    transformData(data){
        if(data){

            data.documents = [];

            if(data.sponsorDocuments){
                data.sponsorDocuments.forEach( (item) => {
                    item.date = momentService(item.data).format('MM/DD/YYYY HH:mm:ss');

                });
            }
            data.status_value = data.status.sort( (function(a,b){
                return new Date(b.date) - new Date(a.date);
            }))[0].status

            data.status_date = momentService(data.status.sort( (function(a,b){
                return new Date(b.date) - new Date(a.date);
            }))[0].date).format('MM/DD/YYYY HH:mm:ss');

            if(data.comments){
                data.comments.forEach( (comment) => {
                    comment.date = momentService(comment.date).format('MM/DD/YYYY HH:mm:ss');
                })
            }

            if(data.sponsorDocuments){
                data.sponsorDocuments.forEach( (doc) => {
                    doc.date = momentService(doc.date).format('MM/DD/YYYY HH:mm:ss');
                    data.documents.push(doc);
                })
            }

            if(data.cmoDocuments){
                data.cmoDocuments.forEach( (doc) => {
                    doc.date = momentService(doc.date).format('MM/DD/YYYY HH:mm:ss');
                    data.documents.push(doc);
                })
            }

            data.couldNotBeReviewed = orderStatusesEnum.ReviewedByCMO !== data.status_value;

            return data;
        }
    }
    attachEvents() {
        return;
    }

    getDate(str) {
        return str.split(' ')[0];
    }

    getTime(str) {
        return str.split(' ')[1];
    }
}
