module.exports = [
  {
    title: "Quản lý nhân sự",
    collapsable: true,
    children: [
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
      "report",
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
