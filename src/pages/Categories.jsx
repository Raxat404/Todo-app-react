import { Button, message, Table } from 'antd'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosAPI } from '../config/axios.interceptors'
import { fetchCategoryFulfilled, fetchCategoryPending, fetchCategoryRejected } from '../store/reducers/categories.slice'

const Categories = () => {
    const {data, loading} = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState (false)

    useEffect(() =>{
        dispatch(fetchCategoryPending())
        axiosAPI
        .get('api/categories')
            .then(res => {
                dispatch(fetchCategoryFulfilled(res.data.data))
            })
            .catch(err => {
                dispatch(fetchCategoryRejected())
            })
    }, [refresh])

    const columns = [
        {
            key: 'name',
            dataIndex: 'name',
            title: 'Name',
        },
        {
            key: 'date',
            dataIndex: 'date',
            title: 'date',
        },
        {
            key: 'actions',
            dataIndex: 'actions',
            title: 'Actions',
        },
    ]

    function deleteCategory(id) {
        axiosAPI
            .delete(`/api/categories/${id}`)
            .then(res => {
                message.success('Categoriy deleted successful!')
                setRefresh(!refresh)
            })
            .catch(err => {
                message.error('Something went wrong!')
            })
    }

    const dataSource = []
    data.map(item => {
        dataSource.push({
            name: item.name,
            date: moment(item.created_at).format('YYYY-MM-DD hh:mm:ss'),
            actions: (
                <div className='flex gap-4'>
                    <Button>Update</Button>
                    <Button onClick={() => deleteCategory(item.id)}>Delete</Button>
                </div>
            ),
        })
    })

  return (
    <div>
        <h1 className='heading'>Categories</h1>
        <Table columns={columns} dataSource={dataSource} loading={loading}></Table>
    </div>
  )
}

export default Categories