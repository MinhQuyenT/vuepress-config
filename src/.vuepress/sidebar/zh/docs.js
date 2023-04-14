module.exports = [
  {
    title: "人事管理",
    collapsable: true,
    children: [
      "",
      {
        title: "一.人員信息資料管理",
        collapsable: true,
        children: [
          "employee-manager",
          "contract-management",
          "discipline-rewards",
        ],
      },
      {
        title: "二.考勤管理",
        collapsable: true,
        children: [
          "keeping-data-card",
          "keeping-shift",
          "keeping-arrange-shift",
          {
            title: "4.假期管理",
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
        title: "三.報表管理",
        collapsable: true,
        children: ["hr-data"],
      },
      {
        title: "五.公司MEMO",
        collapsable: true,
        children: ["document-procedure", "minutes-meeting"],
      },
      {
        title: "六.申請",
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
    title: "生产管理",
    collapsable: true,
    children: [
      {
        title: "七.开发管理",
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
    title: "品质管理",
    collapsable: true,
    children: [
      {
        title: " 二.成品质检",
        collapsable: true,
        children: [
          "qualityMng/qualityMng-warehouse-receipt",
          // "qualityMng/qualityMngWarehouse-receip-tshirt-body",
        ],
      },
    ],
  },
];
