module.exports = [
  {
    title: "Quản lý nhân sự",
    collapsable: true,
    children: [
      "",
      {
        title: "一.Quản lý nhân viên",
        collapsable: true,
        children: [
          "employee-manager",
          "contract-management",
          "discipline-rewards",
        ],
      },
      {
        title: "一.Quản lý chấm công",
        collapsable: true,
        children: [
          "keeping-data-card",
          "keeping-shift",
          "keeping-arrange-shift",
          {
            title: "4.Quản lý nghỉ phép",
            collapsable: true,
            children: [
              "keeping-leave-holiday",
              "keeping-leave-info-management",
              "keeping-leave-apply",
            ],
          },
        ],
      },
      {
        title: "三.Quản lý báo cáo",
        collapsable: true,
        children: ["hr-data"],
      },
      {
        title: "五.Văn bản",
        collapsable: true,
        children: ["document-procedure", "minutes-meeting"],
      },
      {
        title: "六.Đăng ký",
        collapsable: true,
        children: [
          "business-trip-registration",
          "register-leave",
          "register-buy-airline-tickets",
          "visa-registration",
          "register-advance-salary",
          "register-fee-refund",
          "change-of-position",
          "resignation-letter",
          "timekeeping-compensation",
          "occupational-accident-support",
          "register-recruit",
          "register-shift-transfer",
          "Register-bring-goods-out-factory",
          "register-use-car",
        ],
      },
    ],
  },
  {
    title: "Quản lý Kho",
    collapsable: false,
    children: [
      // "works-projects",
    ],
  },
];
