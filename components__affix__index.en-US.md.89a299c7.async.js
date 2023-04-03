"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3154],{470030:function(r,_,e){e.r(_);var m=e(502143),f=e(968521),h=e(720719),p=e(28840),o=e(759907),a=e(828089),v=e(902068),c=e(574399),x=e(863942),g=e(316073),Z=e(24628),E=e(719260),P=e(956140),A=e(127179),l=e(905388),D=e(147341),M=e(606965),O=e(249706),C=e(795127),B=e(116846),T=e(73024),i=e(877719),s=e(667294),n=e(370917);function d(){var u=(0,i.eL)(),t=u.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(l.Z,{items:[{demo:{id:"components-affix-demo-basic"},previewerProps:{title:"Basic",filename:"components/affix/demo/basic.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-affix-demo-on-change"},previewerProps:{title:"Callback",filename:"components/affix/demo/on-change.tsx",jsx:`import { Affix, Button } from 'antd';
const App = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
`,description:"<p>Callback with affixed state.</p>"}},{demo:{id:"components-affix-demo-target"},previewerProps:{title:"Container to scroll.",filename:"components/affix/demo/target.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Set a <code>target</code> for 'Affix', which is listen to scroll event of target element (default is <code>window</code>).</p>",style:`#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}`}},{demo:{id:"components-affix-demo-debug"},previewerProps:{debug:!0,title:"debug",filename:"components/affix/demo/debug.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  return (
    <div
      style={{
        height: 10000,
      }}
    >
      <div>Top</div>
      <Affix offsetTop={top}>
        <div
          style={{
            background: 'red',
          }}
        >
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};
export default App;
`,description:"<p>DEBUG</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value)))),(0,n.tZ)("p",null,(0,n.tZ)("strong",null,t[23].value),t[24].value,(0,n.tZ)("code",null,t[25].value),t[26].value,(0,n.tZ)("code",null,t[27].value),t[28].value,(0,n.tZ)("code",null,t[29].value),t[30].value,(0,n.tZ)("code",null,t[31].value),t[32].value),(0,n.tZ)(o.Z,{lang:"jsx"},t[33].value),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container"},(0,n.tZ)("span",{className:"icon icon-link"})),"When binding container with ",(0,n.tZ)("code",null,t[34].value)," in Affix, elements sometimes move out of the container."),(0,n.tZ)("p",null,t[35].value,(0,n.tZ)("a",{href:"https://codesandbox.io/s/2xyj5zr85p"},t[36].value)),(0,n.tZ)("p",null,t[37].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/3938"},t[38].value),t[39].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/5642"},t[40].value),t[41].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/16120"},t[42].value)),(0,n.tZ)("h3",{id:"when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect"},(0,n.tZ)("span",{className:"icon icon-link"})),"When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element ",(0,n.tZ)("code",null,t[43].value)," is incorrect."),(0,n.tZ)("p",null,t[44].value,(0,n.tZ)("code",null,t[45].value),t[46].value),(0,n.tZ)("p",null,t[47].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/29108"},t[48].value)))))}_.default=d}}]);
