import React, { useEffect, useState } from 'react';
import './index.less'; // 导入自定义的样式文件

export default function App() {
  const [linkList, setLinkList] = useState([
    {
      tab: 'TopEdit',
      urlList: [
        { pathname: '测试环境', url: 'http://34.19.9.158/login' },
        { pathname: '正式环境', url: 'http://34.82.59.91/login' },
      ],
    },
    {
      tab: '国内',
      urlList: [
        { pathname: '官网手机端测试环境', url: 'http://mdev.techlent.com.cn' },
        { pathname: '官网手机端正式环境', url: 'https://m.techlent.com.cn' },
        { pathname: '官网Web测试环境', url: 'http://dev.techlent.com.cn' },
        { pathname: '官网Web正式环境', url: 'https://techlent.com.cn' },
      ],
    },
    {
      tab: '国外',
      urlList: [
        { pathname: '官网手机端测试环境', url: 'https://mdev.techlent.net' },
        { pathname: '官网手机端正式环境', url: 'https://m.techlent.com' },
        { pathname: '官网Web测试环境', url: 'https://dev.techlent.net/' },
        { pathname: '官网Web正式环境', url: 'https://techlent.com/cn' },
      ],
    },
    {
      tab: '国内AI比赛',
      urlList: [
        { pathname: '管理系统-班级管理', url: 'http://dev.xyz.techlent.com.cn/class' },
        { pathname: '导师控制台', url: 'http://mdev.techlent.com.cn/cn/operatorLogin' },
        { pathname: '学生比赛', url: 'http://mdev.techlent.com.cn/cn/operatorLogin/cn/AIContest' },
        { pathname: '学员端任务清单', url: 'http://mdev.techlent.com.cn/cn/user' },
        { pathname: '大屏排行榜', url: 'http://mdev.techlent.com.cn/cn/AIContestRank?event=122&mode=Week1' },
      ],
    },
    {
      tab: '国外AI比赛生产环境',
      urlList: [
        { pathname: '比赛学生端-官网', url: 'https://m.techlent.com/cn/AIContest' },
        { pathname: '比赛学生端-活动入口', url: 'https://m.techlent.com/cn/AIContest?source=zhongguancun' },
        { pathname: '操作员控制界面', url: 'https://m.techlent.com/cn/operatorLogin' },
        { pathname: '大屏规则', url: 'https://techlent.com/cn/AIContestRule/zhongguancun' },
        { pathname: '大屏排行榜', url: ' https://techlent.com/cn/AIContestRank/zhongguancun' },
      ],
    },

  ]);

  const [newTab, setNewTab] = useState('');
  const [newAddressName, setNewAddressName] = useState('');
  const [newAddressURL, setNewAddressURL] = useState('');

  const saveToLocalStorage = (updatedLinkList: any) => {
    localStorage.setItem('linkListTechlent2024', JSON.stringify(updatedLinkList));
  };

  // useEffect(() => {
  //   // 从 localStorage 中读取 linkList
  //   const storedLinkList = localStorage.getItem('linkListTechlent2024');

  //   if (storedLinkList !== "[]" && !storedLinkList) {
  //     setLinkList(JSON.parse(storedLinkList));
  //   } else {
  //     // 如果 localStorage 中没有存储 linkList，则保存当前的 linkList 到 localStorage
  //     saveToLocalStorage(linkList);
  //   }
  // }, []); // 空数组作为依赖，只在组件挂载时执行一次


  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const addNewTab = () => {
    if (newTab.trim() === '') return;
    const updatedLinkList = [...linkList, { tab: newTab, urlList: [] }];
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
    setNewTab('');
  };

  const deleteTab = (tabIndex: any) => {
    const updatedLinkList = [...linkList];
    updatedLinkList.splice(tabIndex, 1);
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
  };

  const addNewAddress = (tabIndex: any) => {
    if (newAddressName.trim() === '' || newAddressURL.trim() === '') return;
    const updatedLinkList = linkList.map((item, index) => {
      if (index === tabIndex) {
        return {
          ...item,
          urlList: [...item.urlList, { pathname: newAddressName, url: newAddressURL }],
        };
      }
      return item;
    });
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
    setNewAddressName('');
    setNewAddressURL('');
  };

  const deleteAddress = (tabIndex: any, addressIndex: number) => {
    const updatedLinkList = linkList.map((item, index) => {
      if (index === tabIndex) {
        const updatedUrlList = [...item.urlList];
        updatedUrlList.splice(addressIndex, 1);
        return {
          ...item,
          urlList: updatedUrlList,
        };
      }
      return item;
    });
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
  };

  return (
    <div className="mainrootT-techlent-20240828-2-3-01">
      {linkList?.map((item, index) => (
        <div className="tabContainer" key={index}>
          <div className="tabTitle">{item.tab}</div>
          {item.urlList?.map((url, urlIndex) => (
            <div key={url.url} className="addressContainer">
              <div className="addressName" onClick={() => handleClick(url.url)} title={url.url}>{url.pathname}</div>
              {/* <div className="deleteButton" onClick={() => deleteAddress(index, urlIndex)}>删除地址</div> */}
            </div>
          ))}
          {/* <div className="formContainer">
            <div style={{ flex: 1, display: 'flex', }}>
              <input
                className="inputField"
                style={{ width: 90 }}
                type="text"
                placeholder="地址名称"
                value={newAddressName}
                onChange={(e) => setNewAddressName(e.target.value)}
              />
              <input
                className="inputField"
                style={{ width: 90 }}
                type="text"
                placeholder="地址URL"
                value={newAddressURL}
                onChange={(e) => setNewAddressURL(e.target.value)}
              />
            </div>
            <button className="addButton" onClick={() => addNewAddress(index)}>添加地址</button>
          </div> */}
          {/* <div className="deleteTabButton" onClick={() => deleteTab(index)}>删除tab</div> */}
        </div>
      ))}
      {/* <div className="addTabContainer">
        <input
          className="inputField"
          type="text"
          placeholder="新tab名称"
          value={newTab}
          onChange={(e) => setNewTab(e.target.value)}
        />
        <button className="addButton" onClick={addNewTab}>添加新tab</button>
      </div> */}
    </div>
  );
}
