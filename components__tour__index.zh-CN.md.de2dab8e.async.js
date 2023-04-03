"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9871],{40236:function(i,l,e){e.r(l);var _=e(502143),Z=e(968521),c=e(720719),v=e(28840),p=e(759907),u=e(828089),m=e(902068),f=e(574399),g=e(863942),h=e(316073),E=e(24628),O=e(719260),P=e(956140),B=e(127179),a=e(905388),D=e(147341),x=e(606965),C=e(249706),T=e(795127),M=e(116846),A=e(73024),o=e(877719),d=e(667294),n=e(370917);function r(){var s=(0,o.eL)(),t=s.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value,(0,n.tZ)("code",null,t[1].value),t[2].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[3].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(a.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tour/demo/basic.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"\u975E\u6A21\u6001",filename:"components/tour/demo/non-modal.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>\u4F7F\u7528 <code>mask={false}</code> \u53EF\u4EE5\u5C06\u5F15\u5BFC\u53D8\u4E3A\u975E\u6A21\u6001\uFF0C\u540C\u65F6\u4E3A\u4E86\u5F3A\u8C03\u5F15\u5BFC\u672C\u8EAB\uFF0C\u5EFA\u8BAE\u4E0E <code>type="primary"</code> \u7EC4\u5408\u4F7F\u7528\u3002</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/tour/demo/placement.tsx",jsx:`import { Button, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>\u6539\u53D8\u5F15\u5BFC\u76F8\u5BF9\u4E8E\u76EE\u6807\u7684\u4F4D\u7F6E\uFF0C\u5171\u6709 12 \u79CD\u4F4D\u7F6E\u53EF\u4F9B\u9009\u62E9\u3002\u5F53 <code>target={null}</code> \u65F6\u5F15\u5BFC\u5C06\u4F1A\u5C55\u793A\u5728\u6B63\u4E2D\u592E\u3002</p>"}},{demo:{id:"components-tour-demo-mask"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F",filename:"components/tour/demo/mask.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-tour-demo-indicator"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",filename:"components/tour/demo/indicator.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u3002</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tour"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tour"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[11].value),t[12].value,(0,n.tZ)("code",null,t[13].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[14].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[17].value),t[18].value,(0,n.tZ)("code",null,t[19].value),t[20].value,(0,n.tZ)("code",null,t[21].value),t[22].value,(0,n.tZ)("code",null,t[23].value),t[24].value,(0,n.tZ)("code",null,t[25].value),t[26].value,(0,n.tZ)("code",null,t[27].value),t[28].value,(0,n.tZ)("code",null,t[29].value),t[30].value,(0,n.tZ)("code",null,t[31].value),t[32].value,(0,n.tZ)("code",null,t[33].value),t[34].value,(0,n.tZ)("code",null,t[35].value),t[36].value,(0,n.tZ)("code",null,t[37].value),t[38].value,(0,n.tZ)("code",null,t[39].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[43].value)),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[47].value)),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[51].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[52].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[55].value),t[56].value,(0,n.tZ)("code",null,t[57].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[58].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[61].value)),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[65].value)),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[69].value)),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[73].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[74].value)),(0,n.tZ)("td",null,t[75].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[78].value)),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value)))),(0,n.tZ)("h3",{id:"tourstep-\u5F15\u5BFC\u6B65\u9AA4\u5361\u7247"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep-\u5F15\u5BFC\u6B65\u9AA4\u5361\u7247"},(0,n.tZ)("span",{className:"icon icon-link"})),"TourStep \u5F15\u5BFC\u6B65\u9AA4\u5361\u7247"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[86].value),(0,n.tZ)("th",null,t[87].value),(0,n.tZ)("th",null,t[88].value),(0,n.tZ)("th",null,t[89].value),(0,n.tZ)("th",null,t[90].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[93].value),t[94].value,(0,n.tZ)("code",null,t[95].value)),(0,n.tZ)("td",null,t[96].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[99].value),t[100].value,(0,n.tZ)("code",null,t[101].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[102].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[105].value)),(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[109].value)),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[113].value)),(0,n.tZ)("td",null,t[114].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[117].value),t[118].value,(0,n.tZ)("code",null,t[119].value),t[120].value,(0,n.tZ)("code",null,t[121].value),t[122].value,(0,n.tZ)("code",null,t[123].value),t[124].value,(0,n.tZ)("code",null,t[125].value),t[126].value,(0,n.tZ)("code",null,t[127].value),t[128].value,(0,n.tZ)("code",null,t[129].value),t[130].value,(0,n.tZ)("code",null,t[131].value),t[132].value,(0,n.tZ)("code",null,t[133].value),t[134].value,(0,n.tZ)("code",null,t[135].value),t[136].value,(0,n.tZ)("code",null,t[137].value),t[138].value,(0,n.tZ)("code",null,t[139].value),t[140].value,(0,n.tZ)("code",null,t[141].value)),(0,n.tZ)("td",null),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[144].value)),(0,n.tZ)("td",null,t[145].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[146].value),(0,n.tZ)("td",null,t[147].value,(0,n.tZ)("code",null,t[148].value),t[149].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[150].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[151].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[152].value),(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[154].value),t[155].value,(0,n.tZ)("code",null,t[156].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[157].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[158].value),(0,n.tZ)("td",null,t[159].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[160].value)),(0,n.tZ)("td",null,t[161].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[162].value),(0,n.tZ)("td",null,t[163].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[164].value)),(0,n.tZ)("td",null,t[165].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[166].value),(0,n.tZ)("td",null,t[167].value,(0,n.tZ)("code",null,t[168].value),t[169].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[170].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[171].value)),(0,n.tZ)("td",null,t[172].value)))))))}l.default=r}}]);
