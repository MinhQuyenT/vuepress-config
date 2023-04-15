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
          "hr/employee-manager",
          "hr/contract-management",
          "hr/discipline-rewards",
        ],
      },
      {
        title: "二.考勤管理",
        collapsable: true,
        children: [
          "hr/keeping-data-card",
          "hr/keeping-shift",
          "hr/keeping-arrange-shift",
          {
            title: "4.假期管理",
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
        title: "三.報表管理",
        collapsable: true,
        children: ["hr/hr-data"],
      },
      {
        title: "五.公司MEMO",
        collapsable: true,
        children: ["hr/document-procedure", "hr/minutes-meeting"],
      },
      {
        title: "六.申請",
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
