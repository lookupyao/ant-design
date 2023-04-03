"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7648],{875111:function(m,o,t){t.r(o);var r=t(502143),u=t(968521),p=t(720719),c=t(28840),v=t(759907),d=t(828089),g=t(902068),h=t(574399),x=t(863942),Z=t(316073),S=t(24628),y=t(719260),E=t(956140),D=t(127179),i=t(905388),O=t(147341),P=t(606965),f=t(249706),M=t(795127),A=t(116846),C=t(73024),l=t(877719),a=t(667294),n=t(370917);function s(){var _=(0,l.eL)(),e=_.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value,(0,n.tZ)("code",null,e[1].value),e[2].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[3].value),(0,n.tZ)("li",null,e[4].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-segmented-demo-basic"},previewerProps:{title:"Basic",filename:"components/segmented/demo/basic.tsx",jsx:`import { Segmented } from 'antd';
export default () => <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-segmented-demo-block"},previewerProps:{title:"Block Segmented",filename:"components/segmented/demo/block.tsx",jsx:`import { Segmented } from 'antd';
export default () => (
  <Segmented block options={[123, 456, 'longtext-longtext-longtext-longtext']} />
);
`,description:"<p><code>block</code> property will make the <code>Segmented</code> fit to its parent width.</p>"}},{demo:{id:"components-segmented-demo-disabled"},previewerProps:{title:"Basic",filename:"components/segmented/demo/disabled.tsx",jsx:`import { Segmented, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
    <Segmented
      options={[
        'Daily',
        {
          label: 'Weekly',
          value: 'Weekly',
          disabled: true,
        },
        'Monthly',
        {
          label: 'Quarterly',
          value: 'Quarterly',
          disabled: true,
        },
        'Yearly',
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>Disabled Segmented.</p>"}},{demo:{id:"components-segmented-demo-controlled"},previewerProps:{title:"Controlled mode",filename:"components/segmented/demo/controlled.tsx",jsx:`import { Segmented } from 'antd';
import { useState } from 'react';
const Demo = () => {
  const [value, setValue] = useState('Map');
  return <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />;
};
export default Demo;
`,description:"<p>Controlled Segmented.</p>"}},{demo:{id:"components-segmented-demo-custom"},previewerProps:{title:"Custom Render",filename:"components/segmented/demo/custom.tsx",jsx:`import { UserOutlined } from '@ant-design/icons';
import { Avatar, Segmented, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Segmented
      options={[
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar src="https://joesch.moe/api/v1/random" />
              <div>User 1</div>
            </div>
          ),
          value: 'user1',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
              <div>User 2</div>
            </div>
          ),
          value: 'user2',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar
                style={{
                  backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
              />
              <div>User 3</div>
            </div>
          ),
          value: 'user3',
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Spring</div>
              <div>Jan-Mar</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Summer</div>
              <div>Apr-Jun</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Autumn</div>
              <div>Jul-Sept</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Winter</div>
              <div>Oct-Dec</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>Custom each Segmented Item by ReactNode.</p>"}},{demo:{id:"components-segmented-demo-dynamic"},previewerProps:{title:"Dynamic",filename:"components/segmented/demo/dynamic.tsx",jsx:`import { Button, Segmented, Space } from 'antd';
import { useState } from 'react';
const Demo = () => {
  const [options, setOptions] = useState(['Daily', 'Weekly', 'Monthly']);
  const [moreLoaded, setMoreLoaded] = useState(false);
  const handleLoadOptions = () => {
    setOptions((prev) => [...prev, 'Quarterly', 'Yearly']);
    setMoreLoaded(true);
  };
  return (
    <Space direction="vertical">
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        Load more options
      </Button>
    </Space>
  );
};
export default Demo;
`,description:"<p>Load <code>options</code> dynamically.</p>"}},{demo:{id:"components-segmented-demo-size"},previewerProps:{title:"Three sizes of Segmented",filename:"components/segmented/demo/size.tsx",jsx:`import { Segmented, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Space>
);
export default App;
`,description:"<p>There are three sizes of an Segmented: <code>large</code> (40px), <code>default</code> (32px) and <code>small</code> (24px).</p>"}},{demo:{id:"components-segmented-demo-with-icon"},previewerProps:{title:"With Icon",filename:"components/segmented/demo/with-icon.tsx",jsx:`import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
export default () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
`,description:"<p>Set <code>icon</code> for Segmented Item.</p>"}},{demo:{id:"components-segmented-demo-icon-only"},previewerProps:{title:"With Icon only",filename:"components/segmented/demo/icon-only.tsx",jsx:`import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
export default () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
`,description:"<p>Set <code>icon</code> without <code>label</code> for Segmented Item.</p>"}},{demo:{id:"components-segmented-demo-controlled-two"},previewerProps:{debug:!0,title:"Controlled Synced mode",filename:"components/segmented/demo/controlled-two.tsx",jsx:`import { Segmented } from 'antd';
import { useState } from 'react';
const Demo = () => {
  const [foo, setFoo] = useState('AND');
  return (
    <>
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
      &nbsp;&nbsp;
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
    </>
  );
};
export default Demo;
`,description:"<p>Tests two Segmented synchronized states in controlled mode.</p>"}},{demo:{id:"components-segmented-demo-size-consistent"},previewerProps:{debug:!0,title:"Consistent height",filename:"components/segmented/demo/size-consistent.tsx",jsx:`import { Button, Input, Segmented, Select, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        size="large"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Button type="primary" size="large">
        Button
      </Button>
    </div>
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Input
        placeholder="default size"
        style={{
          width: 150,
        }}
      />
    </div>
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        size="small"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Select
        size="small"
        defaultValue="lucy"
        style={{
          width: 150,
        }}
      >
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
    </div>
  </Space>
);
export default App;
`,description:"<p>Keep consistent height with other components.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,e[5].value,(0,n.tZ)("code",null,e[6].value))),(0,n.tZ)(d.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value),(0,n.tZ)("th",null,e[10].value),(0,n.tZ)("th",null,e[11].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[32].value),e[33].value,(0,n.tZ)("code",null,e[34].value),e[35].value,(0,n.tZ)("code",null,e[36].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[37].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null),(0,n.tZ)("td",null)))))))}o.default=s}}]);
