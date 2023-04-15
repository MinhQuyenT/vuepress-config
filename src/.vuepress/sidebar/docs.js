module.exports = [
  {
    title: "Quản lý nhân sự",
    collapsable: true,
    children: [
      {
        title: "1.Quản lý nhân viên",
        collapsable: true,
        children: [
          "hr/employee-manager",
          "hr/contract-management",
          "hr/discipline-rewards",
        ],
      },
      {
        title: "2.Quản lý chấm công",
        collapsable: true,
        children: [
          "hr/keeping-data-card",
          "hr/keeping-shift",
          "hr/keeping-arrange-shift",
          {
            title: "2.4.Quản lý nghỉ phép",
            collapsable: true,
            children: [
              "hr/keeping-leave-holiday",
              "hr/keeping-leave-info-management",
              "hr/keeping-leave-apply",
            ],
          },
        ],
      },
      {
        title: "3.Quản lý báo cáo",
        collapsable: true,
        children: ["hr/hr-data"],
      },
      {
        title: "5.Văn bản",
        collapsable: true,
        children: ["hr/document-procedure", "hr/minutes-meeting"],
      },
      {
        title: "6.Đăng ký",
        collapsable: true,
        children: [
          "hr/business-trip-registration",
          "hr/register-leave",
          "hr/register-buy-airline-tickets",
          "hr/visa-registration",
          "hr/register-advance-salary",
          "hr/register-fee-refund",
          "hr/change-of-position",
          "hr/resignation-letter",
          "hr/timekeeping-compensation",
          "hr/occupational-accident-support",
          "hr/register-recruit",
          "hr/register-shift-transfer",
          "hr/Register-bring-goods-out-factory",
          "hr/register-use-car",
        ],
      },
    ],
  },
  {
    title: "Quản lý sản xuất",
    collapsable: true,
    children: [
      {
        title: "7. Quản lý phát triển",
        collapsable: true,
        children: [
          "proMng/weaving-work-order",
          "proMng/dyeing-production-operation",
          "proMng/registration-records",
        ],
      },
    ],
  },
  {
    title: "Quản lý chất lượng",
    collapsable: true,
    children: [
      {
        title: "2. Kiểm tra chất lượng thành phẩm",
        collapsable: true,
        children: [
          "qualityMng/qualityMng-warehouse-receipt",
        ],
      },
    ],
  },
];
