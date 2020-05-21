import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    data: {
        "id": 12,
        "username": "admin",
        "email": "admin@qq.com",
        "phone": "18380808080",
        "role": 0,
        "createTime": 1479048325000,
        "uptateTime": 1479048325000
    }
})