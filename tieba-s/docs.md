#接口文档

<b>参考：</b>
http://cizixs.com/2016/12/12/restful-api-design-guide
https://developer.github.com/v3/


### 帖子
#### 发帖
> POST /posts

<b>params: </b>
> {
>   content: string required
> }

<b>response:</b>
> Status 201 created
> {
>   id: string required
>   content: string required
> }
#### 获取所有的帖子
> GET /posts/all

<b>response:</b>
> Status: 200 OK
> [
    // 默认按创建时间倒序返回
>   {
>     id: string required
>     content: string  required
      createdAt: number timestamp  required
      userId: string required
>   }
> ]
