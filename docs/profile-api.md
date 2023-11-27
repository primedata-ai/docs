# Profile API

## **Overview**

Có 2 loại API:

1. Query thông tin chi tiết profile: lấy thông tin của profile dựa vào PrimeData ID (profile_id) hoặc một trong các Identity trong ID-Res config (Ví dụ: phone_number, email, …)
2. Query các events của profile: lấy danh sách event của profile đó dựa vào PrimeData ID hoặc Identity


## **1.1 API lấy chi tiết profile**

```jsx
(1)POST /pub/profiles/advanced-search
(2)POST /pub/profiles/advanced-search
```

### Header
| Header | Kiểu dữ liệu | Mô tả | Ví dụ |
| --- | --- | --- | --- |
| x-api-key | String | API key sẽ được Primedata cung cấp để tương tác với API| aGdqZ2tqaGtqZzoxMjM0NTY3 |

### Request body

| Parameter | Kiểu dữ liệu | Mô tả | Ràng buộc | Bắt buộc | Mặc định | Ví dụ |
| --- | --- | --- | --- | --- | --- | --- |
| type | list | Chỉ ra các loại dữ liệu muốn lấy là Trait, P-trait hay Identity | List chỉ nhận giá trị trong số "trait", "ptrait", "identity" | Không | ["trait", "ptrait", "identity"] | type=["trait"] type=["trait","ptrait"] type=["trait","identity"] |
| include | list | Chỉ rõ các property muốn lấy.| List chỉ nhận giá trị kiểu string | Không | Tất cả properties | include = ["full_name", "phone_number", "ltv"] |
| identities | dict | chứa các identity và danh sách giá trị từng identity | identity phải có sẵn, nếu identity không hợp lệ sẽ bị lỗi | * |  | {"phone_number": [0123456789]} |
| profile_id | string | id của profile trong hệ thống của Primedata | Không | * |  | 2YhQlO5kmTIRCu22QrO9BmgwbIy |

#### * Bắt buộc phải có identities hoặc profile_id. Nếu có cả 2 thì sẽ query dựa trên profile_id

Format response dữ liệu như sau:

```jsx
{
    "data": {
        "profile_id": "2K7QRzns7Gpw4n4Q4RADtFpmhnm",
        "last_updated": "2020-01-01T00:00:00Z",
        "identity": {
            "phone_number": [
                "0123456788",
                "0123456789"
            ],
            "email": [
                "mail@gmail.com"
            ],
            "clevertap_device_id": [
                "device_id"
            ],
            "crm_user_id": [
                "123"
            ]
        },
        "trait": {
            "full_name": "Sơn",
            "address": "HN"
        },
        "p_trait": {
            "ltv": 12000,
            "last_time_purchased": "2023:01:01T20:00:00Z"
        }
    }
}
```
## **1.2 API lấy event của profile**

### API specs

```jsx
(1)POST /pub/events/advanced-search
(2)POST /pub/events/advanced-search
```
### Header
| Header | Kiểu dữ liệu | Mô tả | Ví dụ |
| --- | --- | --- | --- |
| x-api-key | String | API key sẽ được Primedata cung cấp để tương tác với API| aGdqZ2tqaGtqZzoxMjM0NTY3 |

### Request body

| Parameter | Kiểu dữ liệu | Ràng buộc| Mô tả | Bắt buộc | Mặc định | Ví dụ |
| --- | --- | --- | --- | --- | --- | --- |
| start* | string | Date ISO 8601 | Trả về các event có timestamp > start. | Không | Lấy từ những event phát sinh sớm nhất |2006-01-02 |
| end* | string | Date ISO 8601  | Trả về các event có timestamp < end. | Không | Lấy tới những event phát sinh tới hiện tại | 2018-01-02 |
| include | list | event trong danh sách phải có trong hệ thống | Danh sách các event | Không | Tất cả event | ["OrderCompleted", "OrderCreated"] |
| sort | string | Chỉ nhận giá trị "asc" hoặc "desc" | Trả về thứ tự event tăng dần (asc) hay giảm dần (desc) theo timestamp | Không | Không có thứ tự | asc,desc |
| limit | int | limit > 0 | Số event sẽ được trả về (tối đa 100) | Không | 25 | 12 |
| cursor | string | cursor được lấy từ lần request trước | vị trí bắt đầu của event kế tiếp | Không |  |  |
| identities | dict | chứa các identity và danh sách giá trị từng identity | identity phải có sẵn, nếu identity không hợp lệ sẽ bị lỗi | ** |  | {"phone_number": [0123456789]} |
| profile_id | string | id của profile trong hệ thống của Primedata | Không | ** |  | 2YhQlO5kmTIRCu22QrO9BmgwbIy |

#### * : nếu nhập cả start và end. Sẽ lấy tất cả event phát sinh trong khoảng start và end
#### ** Bắt buộc phải có identities hoặc profile_id. Nếu có cả 2 thì sẽ query dựa trên profile_id


Format dữ liệu như sau:

```jsx
200 OK
{
    "data": [
        {
            "properties": {
                "at": "2023-05-21T11:48:23",
                "full_name": "\u0110\u1ee8C",
                "phone_number": "0123456789",
                "booking_completed_time": "2023-05-21T04:48:23Z",
                "customer_id": "749547"
            },
            "id": "30ShineMSSQL.BookingCompleted.17484563",
            "profile_id": "2Q5OFD0h3NdANoqIJhHzTnto3ay",
            "event_name": "BookingCompleted",
            "time_stamp": "2023:01:01T20:00:00Z",
            "sent_at": "2023:01:01T20:01:00Z",
            "input_schema_version": "0.1"
        },
        {
            "properties": {
                "at": "2023-05-21T11:48:23",
                "full_name": "\u0110\u1ee8C",
                "phone_number": "0123456789",
                "order_date": "2023-05-21T04:48:23Z",
                "order_revenue": 749547
            },
            "id": "30ShineMSSQL.BookingCompleted.17484563",
            "profile_id": "2Q5OFD0h3NdANoqIJhHzTnto3ay",
            "event_name": "OrderCreated",
            "time_stamp": "2023:01:01T20:00:00Z",
            "sent_at": "2023:01:01T20:01:00Z",
            "input_schema_version": "0.1"
        },
        "cursor": {
            "has_more": true,
            "next": "MTUxMzc1NTQzNjg2NzAwMDAwMDo6YWpzLTcyMWFhNzFjNDM2ZWJhOTUyYmI1ZmNiMzJlZWI3MWMzLWNsZWFu"
        }
    ]
}
```


## **3 API Error**

| CODE| STATUS | DESCRIPTION |
| --- | --- | --- |
| 200 | OK | Everything worked as expected. |
| 400 | Bad Request | The request was unacceptable, often due to missing a required parameter. |
| 401 | Unauthorized | No valid Access Token provided. |
| 404 | Not Found | The requested resource doesn’t exist. |
| 429 | Too Many Requests | Too many requests hit the API too quickly. PrimeData recommends an exponential backoff of your requests. |
| 500, 502, 503, 504 | Server Errors | Something went wrong on PrimeData’s side. |

### Error body

```jsx
401 Unauthorized
{
  "error": {
    "code": "authentication_error",
    "message": "Failure to properly authenticate yourself in the request."
  }
}
```

```jsx
400 Bad Request
{
  "error": {
    "code": "validation_error",
    "message": "Invalid Identities {phone_numdber=[0123456789]}"
  }
}
```

| code | message |
| --- | --- |
| authentication_error | Failure to properly authenticate yourself in the request. |
| invalid_request_error | Invalid request errors arise when your request has invalid parameters. |
| rate_limit_error | Too many requests hit the API too quickly. |
| validation_error | Errors triggered when failing to validate fields. |
