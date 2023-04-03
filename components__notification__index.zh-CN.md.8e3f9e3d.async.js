"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3604],{98006:function(r,i,e){e.r(i);var _=e(502143),p=e(968521),m=e(720719),f=e(28840),l=e(759907),u=e(828089),Z=e(902068),v=e(574399),h=e(863942),x=e(316073),B=e(24628),g=e(719260),E=e(956140),C=e(127179),a=e(905388),O=e(147341),D=e(606965),P=e(249706),y=e(795127),N=e(116846),T=e(73024),o=e(877719),d=e(667294),n=e(370917);function c(){var s=(0,o.eL)(),t=s.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[2].value),(0,n.tZ)("li",null,t[3].value),(0,n.tZ)("li",null,t[4].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(a.Z,{items:[{demo:{id:"components-notification-demo-hooks"},previewerProps:{title:"Hooks \u8C03\u7528\uFF08\u63A8\u8350\uFF09",filename:"components/notification/demo/hooks.tsx",jsx:`import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, Space, notification } from 'antd';
import React, { useMemo } from 'react';
const Context = React.createContext({
  name: 'Default',
});
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description: <Context.Consumer>{({ name }) => \`Hello, \${name}!\`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('topLeft')}>
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('topRight')}>
          <RadiusUprightOutlined />
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => openNotification('bottomLeft')}>
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('bottomRight')}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>notification.useNotification</code> \u521B\u5EFA\u652F\u6301\u8BFB\u53D6 context \u7684 <code>contextHolder</code>\u3002\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u9876\u5C42\u6CE8\u518C\u7684\u65B9\u5F0F\u4EE3\u66FF <code>message</code> \u9759\u6001\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u6D88\u8D39\u4E0A\u4E0B\u6587\uFF0C\u56E0\u800C ConfigProvider \u7684\u6570\u636E\u4E5F\u4E0D\u4F1A\u751F\u6548\u3002</p>"}},{demo:{id:"components-notification-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/notification/demo/basic.tsx",jsx:`import { Button, notification } from 'antd';
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const App = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C4.5 \u79D2\u540E\u81EA\u52A8\u5173\u95ED\u3002</p>"}},{demo:{id:"components-notification-demo-duration"},previewerProps:{title:"\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6",filename:"components/notification/demo/duration.tsx",jsx:`import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u901A\u77E5\u6846\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u9ED8\u8BA4 <code>4.5s</code>\uFF0C\u53D6\u6D88\u81EA\u52A8\u5173\u95ED\u53EA\u8981\u5C06\u8BE5\u503C\u8BBE\u4E3A <code>0</code> \u5373\u53EF\u3002</p>"}},{demo:{id:"components-notification-demo-with-icon"},previewerProps:{title:"\u5E26\u6709\u56FE\u6807\u7684\u901A\u77E5\u63D0\u9192\u6846",filename:"components/notification/demo/with-icon.tsx",jsx:`import { Button, notification, Space } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>\u901A\u77E5\u63D0\u9192\u6846\u5DE6\u4FA7\u6709\u56FE\u6807\u3002</p>"}},{demo:{id:"components-notification-demo-with-btn"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE",filename:"components/notification/demo/with-btn.tsx",jsx:`import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = \`open\${Date.now()}\`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u7684\u6837\u5F0F\u548C\u6587\u5B57\u3002</p>"}},{demo:{id:"components-notification-demo-custom-icon"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",filename:"components/notification/demo/custom-icon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u56FE\u6807\u53EF\u4EE5\u88AB\u81EA\u5B9A\u4E49\u3002</p>"}},{demo:{id:"components-notification-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/notification/demo/placement.tsx",jsx:`import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, Space, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>placement</code> \u53EF\u4EE5\u914D\u7F6E\u901A\u77E5\u4ECE\u53F3\u4E0A\u89D2\u3001\u53F3\u4E0B\u89D2\u3001\u5DE6\u4E0B\u89D2\u3001\u5DE6\u4E0A\u89D2\u5F39\u51FA\u3002</p>"}},{demo:{id:"components-notification-demo-custom-style"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",filename:"components/notification/demo/custom-style.tsx",jsx:`import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 style \u548C className \u6765\u5B9A\u4E49\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-notification-demo-update"},previewerProps:{title:"\u66F4\u65B0\u6D88\u606F\u5185\u5BB9",filename:"components/notification/demo/update.tsx",jsx:`import { Button, notification } from 'antd';
const key = 'updatable';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });
    setTimeout(() => {
      api.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 key \u6765\u66F4\u65B0\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-notification-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/notification/demo/render-panel.tsx",jsx:`import { Button, notification } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
export default () => (
  <InternalPanel
    message="Hello World!"
    description="Hello World?"
    type="success"
    btn={
      <Button type="primary" size="small">
        My Button
      </Button>
    }
  />
);
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[5].value)),(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[6].value)),(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[7].value)),(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[8].value)),(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[9].value)),(0,n.tZ)("li",null,(0,n.tZ)("code",null,t[10].value))),(0,n.tZ)("p",null,t[11].value),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[12].value),(0,n.tZ)("th",null,t[13].value),(0,n.tZ)("th",null,t[14].value),(0,n.tZ)("th",null,t[15].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,t[51].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value,(0,n.tZ)("code",null,t[58].value),t[59].value,(0,n.tZ)("code",null,t[60].value),t[61].value,(0,n.tZ)("code",null,t[62].value),t[63].value,(0,n.tZ)("code",null,t[64].value)),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[66].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,(0,n.tZ)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},t[69].value)),(0,n.tZ)("td",null,t[70].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value)))),(0,n.tZ)("h3",{id:"\u5168\u5C40\u914D\u7F6E"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u914D\u7F6E"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u914D\u7F6E"),(0,n.tZ)("p",null,t[83].value),(0,n.tZ)("p",null,(0,n.tZ)("code",null,t[84].value)),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[85].value,(0,n.tZ)("code",null,t[86].value),t[87].value),(0,n.tZ)("p",null,t[88].value)),(0,n.tZ)(l.Z,{lang:"js"},t[89].value),(0,n.tZ)("h4",{id:"notificationconfig"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#notificationconfig"},(0,n.tZ)("span",{className:"icon icon-link"})),"notification.config"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[90].value),(0,n.tZ)("th",null,t[91].value),(0,n.tZ)("th",null,t[92].value),(0,n.tZ)("th",null,t[93].value),(0,n.tZ)("th",null,t[94].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,t[96].value),(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value,(0,n.tZ)("code",null,t[113].value),t[114].value,(0,n.tZ)("code",null,t[115].value),t[116].value,(0,n.tZ)("code",null,t[117].value),t[118].value,(0,n.tZ)("code",null,t[119].value),t[120].value,(0,n.tZ)("code",null,t[121].value),t[122].value,(0,n.tZ)("code",null,t[123].value)),(0,n.tZ)("td",null,t[124].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[125].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[126].value),(0,n.tZ)("td",null,t[127].value),(0,n.tZ)("td",null,t[128].value),(0,n.tZ)("td",null,t[129].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[130].value),(0,n.tZ)("td",null,t[131].value),(0,n.tZ)("td",null,t[132].value),(0,n.tZ)("td",null,t[133].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[134].value),(0,n.tZ)("td",null,t[135].value),(0,n.tZ)("td",null,t[136].value),(0,n.tZ)("td",null,t[137].value),(0,n.tZ)("td",null,t[138].value)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"\u4E3A\u4EC0\u4E48-notification-\u4E0D\u80FD\u83B7\u53D6-contextredux-\u7684\u5185\u5BB9\u548C-configprovider-\u7684-localeprefixclstheme-\u7B49\u914D\u7F6E"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-notification-\u4E0D\u80FD\u83B7\u53D6-contextredux-\u7684\u5185\u5BB9\u548C-configprovider-\u7684-localeprefixclstheme-\u7B49\u914D\u7F6E"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48 notification \u4E0D\u80FD\u83B7\u53D6 context\u3001redux \u7684\u5185\u5BB9\u548C ConfigProvider \u7684 ",(0,n.tZ)("code",null,t[139].value)," \u7B49\u914D\u7F6E\uFF1F"),(0,n.tZ)("p",null,t[140].value,(0,n.tZ)("code",null,t[141].value),t[142].value),(0,n.tZ)("p",null,t[143].value,(0,n.tZ)("code",null,t[144].value),t[145].value,(0,n.tZ)("code",null,t[146].value),t[147].value,(0,n.tZ)("code",null,t[148].value),t[149].value),(0,n.tZ)(l.Z,{lang:"tsx"},t[150].value),(0,n.tZ)("p",null,(0,n.tZ)("strong",null,t[151].value),t[152].value,(0,n.tZ)("code",null,t[153].value),t[154].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[155].value,(0,n.tZ)(o.rU,{to:"/components/app-cn"},t[156].value),t[157].value,(0,n.tZ)("code",null,t[158].value),t[159].value)),(0,n.tZ)("h3",{id:"\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E-prefixcls-"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E-prefixcls-"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E prefixCls \uFF1F"),(0,n.tZ)("p",null,t[160].value,(0,n.tZ)(o.rU,{to:"/components/config-provider-cn#configproviderconfig-4130"},(0,n.tZ)("code",null,t[161].value)),t[162].value))))}i.default=c}}]);
