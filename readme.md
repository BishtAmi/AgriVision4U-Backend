# Backend Developer Assignment

## Api Endpoints

- Create a Task: POST /tasks
- Get All Tasks: GET /tasks
- Get a Specific Task: GET /tasks/:id
- Update a Task: PUT /tasks/:id
- Delete a Task: DELETE /tasks/:id
- Search a Task: GET /tasks/:text

## Create a Task: POST /tasks

- **Description** : create a Task
- **Method**: POST
- **Endpoint**: `/tasks`
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "status": "string",
    "phone": "string",
    "due Date": "string"
  }
  ```
- **Response Status Code**: 200
- **Response Body**:

  ```json
  {
    "Task added succesfully"
  }
  ```

  ## Get All Tasks: GET /tasks

  - **Method**: GET

- **Endpoint**: `/tasks`
- **Response Status Code**: 200
- **Response Body**:

  ```json
  [
    {
      "title": "string",
      "description": "string",
      "status": "string",
      "phone": "string",
      "due Date": "string"
    }
  ]
  ```

  ## Get a Specific Task: GET /tasks/:id

  - **Method**: GET

- **Endpoint**: `/tasks/:id`
- **Response Status Code**: 200
- **Response Body**:

  ```json
  {
    "title": "string",
    "description": "string",
    "status": "string",
    "phone": "string",
    "due Date": "string"
  }
  ```

## Update a Task: PUT /tasks/:id

- **Description** : update a Task
- **Method**: PUT
- **Endpoint**: `/tasks/:id`
- **Request Body**:
  ```json
  {
    "_id": "string",
    "phone": "string",
  }
  {
    "title": "string",
    "description": "string",
    "status": "string",
    "phone": "string",
    "due Date": "string"
  }
  ```
- **Response Status Code**: 200
- **Response Body**:
  ```json
  {
    "Task updated succesfully"
  }
  ```

## Delete a Task: DELETE /tasks/:id

- **Description** : delete a Task
- **Method**: DELETE
- **Endpoint**: `/tasks/:id`
- **Request Body**:
  ```json
  {
    "_id": "string",
    "phone": "string"
  }
  ```
- **Response Status Code**: 200
- **Response Body**:
  ```json
  {
    "Task deleted succesfully"
  }
  ```

## Search a Task: GET /search/:text

- **Method**: GET
- **Endpoint**: `/tasks/:text`
- **Response Status Code**: 200
- **Response Body**:
  ```json
  [
    {
      "title": "string",
      "description": "string",
      "status": "string",
      "phone": "string",
      "due Date": "string"
    }
  ]
  ```
