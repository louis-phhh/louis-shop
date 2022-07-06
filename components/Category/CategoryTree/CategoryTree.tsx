import Logo from '@components/Logo'
import { Tree } from 'antd'
import { DataNode, TreeProps } from 'antd/lib/tree'
import React, { useState } from 'react'

interface Props {
  
}

const CategoryTree: React.FC<Props> = ({  }) => {
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  const onSelect = (_: React.Key[], info: any) => {
    const clickedKey = info?.node?.key as string;
    if (clickedKey) {
      setCheckedKeys((preCheckedKeys) => {
        if (preCheckedKeys.includes(clickedKey)) {
          return preCheckedKeys.filter((v) => v !== clickedKey)
        }
        return [...preCheckedKeys, clickedKey]
      })
    }
  }

  const onCheck = (checkedKeysValue: React.Key[]) => {
    setCheckedKeys(checkedKeysValue);
  };

  const treeData: DataNode[] = [
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Shirts',
      key: 'Shirts',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Dresses',
      key: 'Dresses',
      className: 'mb-3',
    },
    {
      title: 'Jeans',
      key: 'Jeans',
      className: 'mb-3',
      children: [
        { title: 'Skinny', key: 'Skinny', 
        className: 'mb-3', },
        { title: 'Relaxed', key: 's', 
        className: 'mb-3', },
        { title: 'Bootcut', key: 'Bootcut', 
        className: 'mb-3', },
      ],
    },
  ];
  
  return (
    <Tree 
      className='!text-lg !font-semibold'
      checkable
      selectedKeys={[]}
      onSelect={onSelect}
      onCheck={onCheck as TreeProps['onCheck']}
      checkedKeys={checkedKeys}
      treeData={treeData}
    />
  )
}

export default CategoryTree