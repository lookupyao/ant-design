"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(u,i,t){t.r(i);var r=t(502143),m=t(968521),h=t(720719),c=t(28840),_=t(759907),s=t(828089),g=t(902068),E=t(574399),Z=t(863942),v=t(316073),P=t(24628),x=t(719260),M=t(956140),p=t(127179),D=t(905388),O=t(147341),f=t(606965),C=t(249706),I=t(795127),A=t(116846),T=t(73024),a=t(877719),o=t(667294),n=t(370917);function d(){var l=(0,a.eL)(),e=l.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(o.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(a.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

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
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,e[2].value,(0,n.tZ)("code",null,e[3].value),e[4].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[5].value),(0,n.tZ)("p",null,e[6].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,e[7].value,(0,n.tZ)("code",null,e[8].value),e[9].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[10].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(_.Z,{lang:"tsx"},e[11].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(_.Z,{lang:"tsx"},e[12].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[13].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#app"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(s.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[14].value),(0,n.tZ)("th",null,e[15].value),(0,n.tZ)("th",null,e[16].value),(0,n.tZ)("th",null,e[17].value),(0,n.tZ)("th",null,e[18].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,(0,n.tZ)(a.rU,{to:"/components/message/#messageconfig"},e[21].value)),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,(0,n.tZ)(a.rU,{to:"/components/notification/#notificationconfig"},e[26].value)),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value)))))))}i.default=d}}]);
