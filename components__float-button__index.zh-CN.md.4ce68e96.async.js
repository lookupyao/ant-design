"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[390],{946061:function(_,u,e){e.r(u);var s=e(502143),m=e(968521),p=e(720719),c=e(28840),v=e(759907),l=e(828089),Z=e(902068),h=e(574399),g=e(863942),f=e(316073),B=e(24628),O=e(719260),E=e(956140),F=e(127179),i=e(905388),b=e(147341),x=e(606965),P=e(249706),C=e(795127),D=e(116846),A=e(73024),o=e(877719),a=e(667294),t=e(370917);function d(){var r=(0,o.eL)(),n=r.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value,(0,t.tZ)("code",null,n[1].value),n[2].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[3].value),(0,t.tZ)("li",null,n[4].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-float-button-demo-basic"},previewerProps:{iframe:"360",title:"\u57FA\u672C",filename:"components/float-button/demo/basic.tsx",jsx:`import { FloatButton } from 'antd';
const App = () => <FloatButton onClick={() => console.log('click')} />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-float-button-demo-type"},previewerProps:{iframe:"360",title:"\u7C7B\u578B",filename:"components/float-button/demo/type.tsx",jsx:`import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="primary"
      style={{
        right: 24,
      }}
    />
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="default"
      style={{
        right: 94,
      }}
    />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>type</code> \u6539\u53D8\u60AC\u6D6E\u6309\u94AE\u7684\u7C7B\u578B\u3002</p>"}},{demo:{id:"components-float-button-demo-shape"},previewerProps:{iframe:"360",title:"\u5F62\u72B6",filename:"components/float-button/demo/shape.tsx",jsx:`import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton
      shape="circle"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<CustomerServiceOutlined />}
    />
    <FloatButton
      shape="square"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<CustomerServiceOutlined />}
    />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>shape</code> \u8BBE\u7F6E\u4E0D\u540C\u7684\u5F62\u72B6\u3002</p>"}},{demo:{id:"components-float-button-demo-description"},previewerProps:{iframe:"360",title:"\u63CF\u8FF0",filename:"components/float-button/demo/description.tsx",jsx:`import { FileTextOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP INFO"
      shape="square"
      style={{
        right: 24,
      }}
    />
    <FloatButton
      description="HELP INFO"
      shape="square"
      style={{
        right: 94,
      }}
    />
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP"
      shape="square"
      style={{
        right: 164,
      }}
    />
  </>
);
export default App;
`,description:`<p>\u53EF\u4EE5\u901A\u8FC7 <code>description</code> \u8BBE\u7F6E\u6587\u5B57\u5185\u5BB9\u3002</p>
<blockquote>
<p>\u4EC5\u5F53 <code>shape</code> \u5C5E\u6027\u4E3A <code>square</code> \u65F6\u652F\u6301\u3002\u7531\u4E8E\u7A7A\u95F4\u8F83\u5C0F\uFF0C\u63A8\u8350\u4F7F\u7528\u6BD4\u8F83\u7CBE\u7B80\u7684\u53CC\u6570\u6587\u5B57\u3002</p>
</blockquote>`}},{demo:{id:"components-float-button-demo-tooltip"},previewerProps:{iframe:"360",title:"\u542B\u6709\u6C14\u6CE1\u5361\u7247\u7684\u60AC\u6D6E\u6309\u94AE",filename:"components/float-button/demo/tooltip.tsx",jsx:`import { FloatButton } from 'antd';
const App = () => <FloatButton tooltip={<div>Documents</div>} />;
export default App;
`,description:"<p>\u8BBE\u7F6E tooltip \u5C5E\u6027\uFF0C\u5373\u53EF\u5F00\u542F\u6C14\u6CE1\u5361\u7247\u3002</p>"}},{demo:{id:"components-float-button-demo-group"},previewerProps:{iframe:"360",title:"\u6D6E\u52A8\u6309\u94AE\u7EC4",filename:"components/float-button/demo/group.tsx",jsx:`import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    <FloatButton.Group
      shape="square"
      style={{
        right: 94,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);
export default App;
`,description:"<p>\u6309\u94AE\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 <code>&#x3C;FloatButton.Group /></code>\uFF0C\u5E76\u901A\u8FC7\u8BBE\u7F6E <code>shape</code> \u5C5E\u6027\u6539\u53D8\u60AC\u6D6E\u6309\u94AE\u7EC4\u7684\u5F62\u72B6\u3002\u60AC\u6D6E\u6309\u94AE\u7EC4\u7684 <code>shape</code> \u4F1A\u8986\u76D6\u5185\u90E8 FloatButton \u7684 <code>shape</code> \u5C5E\u6027\u3002</p>"}},{demo:{id:"components-float-button-demo-group-menu"},previewerProps:{iframe:"360",title:"\u83DC\u5355\u6A21\u5F0F",filename:"components/float-button/demo/group-menu.tsx",jsx:`import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>
);
export default App;
`,description:"<p>\u8BBE\u7F6E <code>trigger</code> \u5C5E\u6027\u5373\u53EF\u5F00\u542F\u83DC\u5355\u6A21\u5F0F\u3002\u63D0\u4F9B <code>hover</code> \u548C <code>click</code> \u4E24\u79CD\u89E6\u53D1\u65B9\u5F0F\u3002</p>"}},{demo:{id:"components-float-button-demo-back-top"},previewerProps:{iframe:"360",title:"\u56DE\u5230\u9876\u90E8",filename:"components/float-button/demo/back-top.tsx",jsx:`import { FloatButton } from 'antd';
const App = () => (
  <div
    style={{
      height: '500vh',
      padding: 10,
    }}
  >
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <FloatButton.BackTop />
  </div>
);
export default App;
`,description:"<p>\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p>"}},{demo:{id:"components-float-button-demo-badge"},previewerProps:{iframe:"360",title:"\u5FBD\u6807\u6570",filename:"components/float-button/demo/badge.tsx",jsx:`import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <>
    <FloatButton
      shape="circle"
      badge={{
        dot: true,
      }}
      style={{
        right: 24 + 70 + 70,
      }}
    />
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24 + 70,
      }}
    >
      <FloatButton
        tooltip={<div>custom badge color</div>}
        badge={{
          count: 5,
          color: 'blue',
        }}
      />
      <FloatButton
        badge={{
          count: 5,
        }}
      />
    </FloatButton.Group>
    <FloatButton.Group shape="circle">
      <FloatButton
        badge={{
          count: 12,
        }}
        icon={<QuestionCircleOutlined />}
      />
      <FloatButton
        badge={{
          count: 123,
          overflowCount: 999,
        }}
      />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);
export default App;
`,description:"<p>\u53F3\u4E0A\u89D2\u9644\u5E26\u5706\u5F62\u5FBD\u6807\u6570\u5B57\u7684\u60AC\u6D6E\u6309\u94AE\u3002</p>"}},{demo:{id:"components-float-button-demo-badge-debug"},previewerProps:{iframe:"360",debug:!0,title:"\u8C03\u8BD5\u5C0F\u5706\u70B9\u4F7F\u7528",filename:"components/float-button/demo/badge-debug.tsx",jsx:`import { ConfigProvider, FloatButton, Slider } from 'antd';
import { useState } from 'react';
const App = () => {
  const [radius, setRadius] = useState(0);
  const token = {
    borderRadius: radius,
  };
  return (
    <>
      <Slider
        min={0}
        max={20}
        style={{
          margin: 16,
        }}
        onChange={setRadius}
      />
      <ConfigProvider
        theme={{
          token,
        }}
      >
        <FloatButton
          shape="square"
          badge={{
            dot: true,
          }}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u8C03\u8BD5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-float-button-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/float-button/demo/render-panel.tsx",jsx:`import { CustomerServiceOutlined, QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalFloatButton } = FloatButton;
const App = () => (
  <div
    style={{
      display: 'flex',
      columnGap: 16,
      alignItems: 'center',
    }}
  >
    <InternalFloatButton backTop />
    <InternalFloatButton icon={<CustomerServiceOutlined />} />
    <InternalFloatButton
      icon={<QuestionCircleOutlined />}
      description="HELP"
      shape="square"
      type="primary"
    />
    <InternalFloatButton
      shape="square"
      items={[
        {
          icon: <QuestionCircleOutlined />,
        },
        {
          icon: <CustomerServiceOutlined />,
        },
        {
          icon: <SyncOutlined />,
        },
      ]}
    />
    <InternalFloatButton
      open
      icon={<CustomerServiceOutlined />}
      trigger="click"
      items={[
        {
          icon: <QuestionCircleOutlined />,
        },
        {
          icon: <CustomerServiceOutlined />,
        },
        {
          icon: <SyncOutlined />,
        },
      ]}
    />
  </div>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[5].value,(0,t.tZ)("code",null,n[6].value),n[7].value)),(0,t.tZ)("h3",{id:"\u5171\u540C\u7684-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5171\u540C\u7684 API"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value),(0,t.tZ)("th",null,n[11].value),(0,t.tZ)("th",null,n[12].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[27].value),n[28].value,(0,t.tZ)("code",null,n[29].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[30].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[33].value),n[34].value,(0,t.tZ)("code",null,n[35].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[36].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value,(0,t.tZ)("code",null,n[51].value),n[52].value),(0,t.tZ)("td",null,(0,t.tZ)(o.rU,{to:"/components/badge-cn#api"},n[53].value)),(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value)))),(0,t.tZ)("h3",{id:"floatbuttongroup"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#floatbuttongroup"},(0,t.tZ)("span",{className:"icon icon-link"})),"FloatButton.Group"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[56].value),(0,t.tZ)("th",null,n[57].value),(0,t.tZ)("th",null,n[58].value),(0,t.tZ)("th",null,n[59].value),(0,t.tZ)("th",null,n[60].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[63].value),n[64].value,(0,t.tZ)("code",null,n[65].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[66].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[69].value),n[70].value,(0,t.tZ)("code",null,n[71].value)),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null,n[80].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"floatbuttonbacktop"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#floatbuttonbacktop"},(0,t.tZ)("span",{className:"icon icon-link"})),"FloatButton.BackTop"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[81].value),(0,t.tZ)("th",null,n[82].value),(0,t.tZ)("th",null,n[83].value),(0,t.tZ)("th",null,n[84].value),(0,t.tZ)("th",null,n[85].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[86].value),(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[90].value),(0,t.tZ)("td",null,n[91].value),(0,t.tZ)("td",null,n[92].value),(0,t.tZ)("td",null,n[93].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[94].value),(0,t.tZ)("td",null,n[95].value),(0,t.tZ)("td",null,n[96].value),(0,t.tZ)("td",null,n[97].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[98].value),(0,t.tZ)("td",null,n[99].value),(0,t.tZ)("td",null,n[100].value),(0,t.tZ)("td",null,n[101].value),(0,t.tZ)("td",null)))))))}u.default=d}}]);
