/*************************************
 * 【配置新增员工的类别】
 * 涉及页面: addEmployee.jsx
 ************************************/
export const GROUPLIST = [
  {
    title: '超级管理员',
    role: 'superAdmin'
  }, 
  {
    title: '营销部管理员',
    role: 'saleAdmin'
  }, 
  {
    title: '营销一部',
    role: 'saleOne'
  }, 
  {
    title: '营销二部',
    role: 'saleTwo'
  }, 
  {
    title: '设计一部',
    role: 'designOne'
  }, 
  {
    title: '设计二部',
    role: 'designTwo'
  }, 
  {
    title: '工程部',
    role: 'project'
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