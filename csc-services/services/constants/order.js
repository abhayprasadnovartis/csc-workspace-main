module.exports.orderStatusesEnum = {
  Initiated: 'Initiated',
  ReviewedByCMO: 'Reviewed by CMO',
  ReviewedBySponsor: 'Reviewed by Sponsor',
  Approved: 'Approved',
  Canceled: 'Canceled',
};

module.exports.orderTableHeaders = [
  {
    column: 'sponsorId',
    label: 'Sponsor ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'studyId',
    label: 'Study ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'orderId',
    label: 'Order ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'siteId',
    label: 'Site ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'requestDate',
    label: 'Request Date',
    notSortable: false,
    type: 'date',
    asc: null,
    desc: null,
  },
  {
    column: 'deliveryDate',
    label: 'Delivery Date/Time',
    notSortable: false,
    type: 'date',
    asc: null,
    desc: null,
  },
  {
    column: 'status',
    label: 'Order Status',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'lastModified',
    label: 'Last Modified',
    type: 'date',
    notSortable: false,
    asc: null,
    desc: null,
  },
  {
    column: null,
    label: 'Controls',
    notSortable: true,
    desc: null,
  },
];

module.exports.demoData = [
  {
    sponsorId: 'A1A323',
    studyId: 'B2223',
    orderId: 'C123',
    siteId: 'AB312',
    requestDate: '2021-06-02T20:29:19.207Z',
    deliveryDate: '2021-06-01T20:29:19.207Z',
    status: orderStatusesEnum.Canceled,
    lastModified: '2021-06-04T20:29:19.207Z',
  },
  {
    sponsorId: 'A112323',
    studyId: 'C23',
    orderId: 'C113',
    siteId: '11AB12',
    requestDate: '2021-04-03T20:29:19.207Z',
    deliveryDate: '2021-02-01T20:29:19.207Z',
    status: orderStatusesEnum.Approved,
    lastModified: '2021-01-01T20:29:19.207Z',
  },
  {
    sponsorId: 'A132123A3',
    studyId: 'B123',
    orderId: 'CAS23',
    siteId: 'AB212',
    requestDate: '2021-06-02T20:29:19.207Z',
    deliveryDate: '2021-06-01T20:29:19.207Z',
    status: orderStatusesEnum.Initiated,
    lastModified: '2021-06-04T20:29:19.207Z',
  },
  {
    sponsorId: 'A131223',
    studyId: '1B23',
    orderId: 'AC23',
    siteId: '332AB12',
    requestDate: '2021-06-02T20:29:19.207Z',
    deliveryDate: '2021-06-01T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedByCMO,
    lastModified: '2021-06-02T20:29:19.207Z',
  },
  {
    sponsorId: 'A111323',
    studyId: 'B3243',
    orderId: 'C2443',
    siteId: 'AB1A22',
    requestDate: '2021-06-05T20:29:19.207Z',
    deliveryDate: '2021-06-06T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedBySponsor,
    lastModified: '2021-06-07T20:29:19.207Z',
  },
  {
    sponsorId: 'A131223',
    studyId: 'B244DF3',
    orderId: 'C2321',
    siteId: 'AB1222S2',
    requestDate: '2021-06-01T20:29:19.207Z',
    deliveryDate: '2021-06-02T20:29:19.207Z',
    status: orderStatusesEnum.Canceled,
    lastModified: '2021-06-04T20:29:19.207Z',
  },
  {
    sponsorId: 'A13111223',
    studyId: 'B2AA3',
    orderId: 'C223',
    siteId: 'AB1122',
    requestDate: '2021-06-02T20:29:19.207Z',
    deliveryDate: '2021-06-05T20:29:19.207Z',
    status: orderStatusesEnum.Approved,
    lastModified: '2021-06-06T20:29:19.207Z',
  },
  {
    sponsorId: 'A131223',
    studyId: 'B2AS3',
    orderId: 'C21213',
    siteId: 'AB1112',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Initiated,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'AA1123323',
    studyId: 'B2D63',
    orderId: 'C2D6F3',
    siteId: 'AB1462',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedByCMO,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1346523',
    studyId: 'B2GDF3',
    orderId: 'C53423',
    siteId: 'AB34512',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedBySponsor,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1333323',
    studyId: 'B523',
    orderId: 'C623',
    siteId: 'AB712',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Canceled,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1123323',
    studyId: 'B12323',
    orderId: 'C21233',
    siteId: 'AB412',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Approved,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1534323',
    studyId: 'B25343',
    orderId: 'C65423',
    siteId: 'AB16452',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Initiated,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A7561323',
    studyId: 'B56723',
    orderId: 'C25763',
    siteId: 'AB57612',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedByCMO,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1687323',
    studyId: 'B97823',
    orderId: 'C20893',
    siteId: 'AB08912',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedBySponsor,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A13U8O23',
    studyId: 'B2U8O3',
    orderId: 'C28OU3',
    siteId: 'AB1U8O2',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Canceled,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1U8O323',
    studyId: 'B2U8O3',
    orderId: 'C2U8O3',
    siteId: 'ABU8O12',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Approved,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1U8O323',
    studyId: 'B2OU83',
    orderId: 'C2OU83',
    siteId: 'AB1U8O2',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.Initiated,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1323',
    studyId: 'B2UT63',
    orderId: 'C2T6U3',
    siteId: 'AB1T6U2',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedByCMO,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
  {
    sponsorId: 'A1R5Y323',
    studyId: 'B25RY3',
    orderId: 'CR5Y3',
    siteId: 'ABRY512',
    requestDate: '2021-06-03T20:29:19.207Z',
    deliveryDate: '2021-06-03T20:29:19.207Z',
    status: orderStatusesEnum.ReviewedBySponsor,
    lastModified: '2021-06-03T20:29:19.207Z',
  },
];
