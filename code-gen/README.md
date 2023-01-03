# whiz code gen

## Code Gen for Projects

_Create a virtual env in the application directory and activate it_

## Installation

- python
- node
  > Note: `python extension pack` is required for generating code.

### For Windows

```sh
python -m venv venv
venv\Scripts\activate.bat
```

### For Mac OS

```sh
python3 -m venv venv
source venv/bin/activate
```

## Install Dependencies in Virtual Environment::

    pip install -r requirements.txt
    pip3 install -r requirements.txt

## Commands :

    On Virtual Environment::
    set APP_ENV=Production
    export APP_ENV=Production

    python main.py

## Project json attributes :

### type: It is UI and yup details about

Instructions on how to use them in your own application are linked below.
| Field | Description |
| ------ | ------ |
|text| string field for any text input
|textarea|
|int|
|positiveInt|
|negativeInt|
|float|
|positiveFloat|
|negativeFloat|
|age|
|date|
|datetime|
|boolean|
|select|
|multiSelect|
|city |
|country |
|pincode|
|phone|
|email|
| mobile|
|checkbox|
|multiCheckbox|
|count|
|enum|
|avatar|
|image|
|dob|
|currency|

### fieldType: it is database/ graphql / prisma /

Instructions on how to use them in your own application are linked below.
| Field | DB type | status | Description
| ------ | ------ | ------ | ------
|String | text , textarea, select, city, country, pinCode, phone, email, mobile, enum, avatar,image | IN-PROGRESS |
|Int|int,positiveInt,negativeInt, age, count | IN-PROGRESS |
|Float|float, positiveFloat, negativeFloat, currency| IN-PROGRESS |
|DateTime |date, datetime, dob | IN-PROGRESS |
|Boolean|boolean, checkbox | IN-PROGRESS |
<!-- |Decimal | currency | IN-PROGRESS | -->
<!-- | [] | multiCheckbox, multiSelect | IN-PROGRESS | -->

        
