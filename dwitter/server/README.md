# Tweets

- `Tweet` Schema
  ```json
  {
    id: string,  // 트윗 아이디
    text: string,  // 트윗 텍스트
    createdAt: Date, // 트윗 생성 날짜
    name: string,  // 사용자 이름
    username: string,  // 사용자 닉네임 (아이디)
    url: string (optional) // 사용자 프로파일 사진 URL
  }
  ```

### `GET` /tweets

- get all tweets
  Response `200`
  ```
  {
     [tweet, tweet ....]
  }
  ```

### `GET` /tweets?username=:username

- get all tweets for user's username
  Response `200`
  ```
  {
     [tweet, tweet ....]
  }
  ```

### `GET` /tweets/:id

- get tweet by id
  Response `200`
  ```
  {
     tweet
  }
  ```

### `POST` /tweets

- creating new tweet
  Request
  ```
  {
     text,
     name,
     username,
  	 url, (optinal)
  }
  ```
  Response `201`
  ```
  {
     tweet
  }
  ```

### `PUT` /tweets/:id

- updating tweet
  Request
  ```
  {
     text
  }
  ```
  Response `200`
  ```
  {
     tweet
  }
  ```

### `DELETE` /tweets/:id

- updating tweet

# Auth

- `User` Schema
  ```json
  {
    id: string // 사용자의 고유한 아이디
    username: string,  // 사용자 닉네임 (아이디)
    password: string,  // 사용자 비밀번호
    name: string,  // 사용자 이름
    email: string,  // 사용자 이메일
    url: string (optional) // 사용자 프로파일 사진 URL
  }
  ```

### `POST`/auth/signup

Reqeust

```json
{
	username,
	password,
  name,
  email,
  url
}
```

Response

```json
{
	token,
	username
}
```

### `POST`/auth/login

Reqeust

```json
{
	username,
	password
}
```

Response

```json
{
	token,
	username
}
```

### `GET` /auth/me

```json
{
	token,
	username
}
```
