"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9653],{17343:function(m,i,e){e.r(i);var p=e(502143),c=e(968521),Z=e(720719),h=e(28840),a=e(759907),r=e(828089),v=e(902068),b=e(574399),x=e(863942),g=e(316073),E=e(24628),f=e(719260),A=e(956140),o=e(127179),u=e(905388),P=e(147341),D=e(606965),O=e(249706),L=e(795127),M=e(116846),I=e(73024),l=e(877719),d=e(667294),n=e(370917);function _(){var s=(0,l.eL)(),t=s.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value),(0,n.tZ)("li",null,t[3].value)),(0,n.tZ)(a.Z,{lang:"jsx"},t[4].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-breadcrumb-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/breadcrumb/demo/basic.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The simplest use.</p>"}},{demo:{id:"components-breadcrumb-demo-withicon"},previewerProps:{title:"With an Icon",filename:"components/breadcrumb/demo/withIcon.tsx",jsx:`import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The icon should be placed in front of the text.</p>"}},{demo:{id:"components-breadcrumb-demo-react-router"},previewerProps:{iframe:"200",title:"react-router V6",filename:"components/breadcrumb/demo/react-router.tsx",jsx:`import { Alert, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \`/\${pathSnippets.slice(0, index + 1).join('/')}\`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Alert
        style={{
          margin: '16px 0',
        }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);
export default App;
`,description:"<p>Used together with <code>react-router@6+</code>.</p>",style:`.demo {
  margin: 16px;
}
.demo-nav {
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  background: #f8f8f8;
}
.demo-nav a {
  padding: 0 8px;
  line-height: 30px;
}
.app-list {
  margin-top: 16px;
}`}},{demo:{id:"components-breadcrumb-demo-separator"},previewerProps:{title:"Configuring the Separator",filename:"components/breadcrumb/demo/separator.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:'<p>The separator can be customized by setting the separator property: <code>separator=">"</code>.</p>'}},{demo:{id:"components-breadcrumb-demo-overlay"},previewerProps:{title:"Bread crumbs with drop down menu",filename:"components/breadcrumb/demo/overlay.tsx",jsx:`import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title: 'Button',
      },
    ]}
  />
);
export default App;
`,description:"<p>Breadcrumbs support drop down menu.</p>"}},{demo:{id:"components-breadcrumb-demo-separator-component"},previewerProps:{title:"Configuring the Separator Independently",filename:"components/breadcrumb/demo/separator-component.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>Customize separator for each other.</p>"}},{demo:{id:"components-breadcrumb-demo-debug-routes"},previewerProps:{title:"Debug Routes",filename:"components/breadcrumb/demo/debug-routes.tsx",jsx:`import { Breadcrumb } from 'antd';
export default () => (
  <Breadcrumb
    routes={[
      {
        path: '/home',
        breadcrumbName: 'Home',
      },
      {
        path: '/user',
        breadcrumbName: 'User',
        children: [
          {
            path: '/user1',
            breadcrumbName: 'User1',
          },
          {
            path: '/user2',
            breadcrumbName: 'User2',
          },
        ],
      },
    ]}
  />
);
`,description:"<p>Origin <code>routes</code> debug.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"breadcrumb"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumb"},(0,n.tZ)("span",{className:"icon icon-link"})),"Breadcrumb"),(0,n.tZ)(r.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#ItemType"},t[20].value)),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[26].value)),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"itemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[27].value,(0,n.tZ)(l.rU,{to:"#RouteItemType"},t[28].value),t[29].value,(0,n.tZ)(l.rU,{to:"#SeparatorType"},t[30].value))),(0,n.tZ)("h3",{id:"routeitemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#routeitemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"RouteItemType"),(0,n.tZ)(r.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[31].value),(0,n.tZ)("th",null,t[32].value),(0,n.tZ)("th",null,t[33].value),(0,n.tZ)("th",null,t[34].value),(0,n.tZ)("th",null,t[35].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"/components/dropdown"},t[42].value)),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"/components/menu/#api"},t[50].value)),(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"separatortype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#separatortype"},(0,n.tZ)("span",{className:"icon icon-link"})),"SeparatorType"),(0,n.tZ)(a.Z,{lang:"ts"},t[61].value),(0,n.tZ)(r.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[62].value),(0,n.tZ)("th",null,t[63].value),(0,n.tZ)("th",null,t[64].value),(0,n.tZ)("th",null,t[65].value),(0,n.tZ)("th",null,t[66].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[69].value)),(0,n.tZ)("td",null),(0,n.tZ)("td",null,t[70].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[74].value)),(0,n.tZ)("td",null,t[75].value)))),(0,n.tZ)("h3",{id:"use-with-browserhistory"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#use-with-browserhistory"},(0,n.tZ)("span",{className:"icon icon-link"})),"Use with browserHistory"),(0,n.tZ)("p",null,t[76].value,(0,n.tZ)("code",null,t[77].value),t[78].value,(0,n.tZ)("code",null,t[79].value),t[80].value,(0,n.tZ)("code",null,t[81].value),t[82].value),(0,n.tZ)(a.Z,{lang:"jsx"},t[83].value),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#design-token"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(o.Z,{component:"Breadcrumb"})))}i.default=_}}]);
