"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{413111:function(d,a,e){e.r(a);var r=e(502143),m=e(968521),E=e(720719),h=e(28840),t=e(759907),i=e(828089),Z=e(902068),c=e(574399),v=e(863942),g=e(316073),D=e(24628),P=e(719260),M=e(956140),C=e(127179),x=e(905388),O=e(147341),p=e(606965),A=e(249706),f=e(795127),I=e(116846),F=e(73024),u=e(877719),l=e(667294),n=e(370917);function o(){var s=(0,u.eL)(),_=s.texts;return(0,n.tZ)(u.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,_[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,_[1].value,(0,n.tZ)("code",null,_[2].value),_[3].value,(0,n.tZ)("code",null,_[4].value),_[5].value,(0,n.tZ)("code",null,_[6].value),_[7].value,(0,n.tZ)("code",null,_[8].value),_[9].value),(0,n.tZ)("li",null,_[10].value,(0,n.tZ)("code",null,_[11].value),_[12].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(u.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,n.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,n.tZ)("p",null,_[13].value,(0,n.tZ)("code",null,_[14].value),_[15].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[16].value),(0,n.tZ)("p",null,_[17].value),(0,n.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,n.tZ)("p",null,_[18].value,(0,n.tZ)("code",null,_[19].value),_[20].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[21].value),(0,n.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,n.tZ)(t.Z,{lang:"tsx"},_[22].value),(0,n.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,n.tZ)(t.Z,{lang:"tsx"},_[23].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[24].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#app"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(i.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,_[25].value),(0,n.tZ)("th",null,_[26].value),(0,n.tZ)("th",null,_[27].value),(0,n.tZ)("th",null,_[28].value),(0,n.tZ)("th",null,_[29].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,_[30].value),(0,n.tZ)("td",null,_[31].value),(0,n.tZ)("td",null,(0,n.tZ)(u.rU,{to:"/components/message-cn/#messageconfig"},_[32].value)),(0,n.tZ)("td",null,_[33].value),(0,n.tZ)("td",null,_[34].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,_[35].value),(0,n.tZ)("td",null,_[36].value),(0,n.tZ)("td",null,(0,n.tZ)(u.rU,{to:"/components/notification-cn/#notificationconfig"},_[37].value)),(0,n.tZ)("td",null,_[38].value),(0,n.tZ)("td",null,_[39].value)))))))}a.default=o}}]);
