import Logo from '@components/Logo'
import useTrans from '@hooks/useTrans'
import { Input, Tree } from 'antd'
import { DataNode, TreeProps } from 'antd/lib/tree'
import React, { useState } from 'react'

interface Props {
  
}

const Search: React.FC<Props> = (props) => {
  
  const [loading, setLoading] = useState(false)
  const trans = useTrans()
  
  return (
    <Input.Search {...props} size='large' placeholder={trans.header.searchInputPlaceholder}  loading={loading} />
  )
}

export default Search