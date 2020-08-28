/*************************************
 * 【配置新增员工的权限】
 * 涉及页面: statical.jsx, addEmployee.jsx
 ************************************/
export const ADMIN = {
  phone: '13551648321',
  name: '何亮',
  password: 'hl@shangchen'
}
export const SUB_ADMIN = {
  phone: '18308363494',
  name: '陈潘',
  password: 'cp@shangchen'
}

/*************************************
 * 【配置新增员工的部门】
 * 涉及页面: addEmployee.jsx
 ************************************/
export const GROUPLIST = [
  {
    title: '营销一部',
    value: 'saleOne'
  },
  {
    title: '营销二部',
    value: 'saleTwo'
  }, 
  {
    title: '设计一部',
    value: 'designOne'
  }, 
  {
    title: '设计二部',
    value: 'designTwo'
  }, 
  {
    title: '工程部',
    value: 'project'
  }
];

/*************************************
 * 【客户流程状态】
 * 涉及页面: addClient.jsx,
 ************************************/
export const STATUSLIST = [
  {
    title: '意向',
    value: 'yixiang',
    color: 'orange'
  },
  {
    title: '定金',
    value: 'dingjin',
    color: 'yellow'
  },
  {
    title: '设计',
    value: 'sheji',
    color: 'olive'
  },
  {
    title: '转合同',
    value: 'zhuanhetong',
    color: 'green'
  },
  {
    title: '施工',
    value: 'shigong',
    color: 'cyan'
  },
  {
    title: '交付',
    value: 'jiaofu',
    color: 'blue'
  },  
]