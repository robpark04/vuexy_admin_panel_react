import mock from '../mock'
const data = {
  chartdata: {
    positive: [
        { x: '01/06/2020', y: 3.5 },
        { x: '01/07/2020', y: 3.7 },
        { x: '01/08/2020', y: 3.5 },
        { x: '01/09/2020', y: 3.7 },
        { x: '01/10/2020', y: 3.5 },
        { x: '01/11/2020', y: 3.7 },
        { x: '01/12/2020', y: 3.5 },
        { x: '01/13/2020', y: 3.7 },
        { x: '01/14/2020', y: 3.5 },
        { x: '01/15/2020', y: 3.7 },
        { x: '01/16/2020', y: 3.5 },
        { x: '01/17/2020', y: 3.7 },
        { x: '01/18/2020', y: 3.5 },
        { x: '01/19/2020', y: 3.7 },
        { x: '01/20/2020', y: 3.5 },
        { x: '01/21/2020', y: 3.7 }
    ],
    negative:[
        { x: '01/06/2020', y: 2.5 },
        { x: '01/07/2020', y: 2.7 },
        { x: '01/08/2020', y: 3.5 },
        { x: '01/09/2020', y: 3.7 },
        { x: '01/10/2020', y: 2.5 },
        { x: '01/11/2020', y: 1.7 },
        { x: '01/12/2020', y: 4.5 },
        { x: '01/13/2020', y: 4.7 },
        { x: '01/14/2020', y: 5.5 },
        { x: '01/15/2020', y: 5.7 },
        { x: '01/16/2020', y: 6.5 },
        { x: '01/17/2020', y: 6.7 },
        { x: '01/18/2020', y: 7.5 },
        { x: '01/19/2020', y: 7.7 },
        { x: '01/20/2020', y: 6.5 },
        { x: '01/21/2020', y: 5.7 }
    ]
  },
  testvolume:[
        { x: '01/06/2020', y: 10 },
        { x: '01/07/2020', y: 14 },
        { x: '01/08/2020', y: 20 },
        { x: '01/09/2020', y: 12 },
        { x: '01/10/2020', y: 35 },
        { x: '01/11/2020', y: 17 },
        { x: '01/12/2020', y: 5 },
        { x: '01/13/2020', y: 40 },
        { x: '01/14/2020', y: 10 },
        { x: '01/15/2020', y: 17 },
        { x: '01/16/2020', y: 27 },
        { x: '01/17/2020', y: 29 },
        { x: '01/18/2020', y: 31 },
        { x: '01/19/2020', y: 45 },
        { x: '01/20/2020', y: 42 },
        { x: '01/21/2020', y: 31 }
    ]
}

mock.onGet('/overview/chartdata').reply(() =>  [200, data])