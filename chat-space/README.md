## accountsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key :true|
|mail|reference|null: false, unique: true, foreign_key :true|
|password|string|null: false|

### Association
- has_one_attached :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|reference|null: false, unique: true, foreign_key :true|

### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members
- has_one_attached :account

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|group_id|reference|null: false, foreign_key :true|
|user_id|reference|null: false, foreign_key :true|

### Association
- has_many :users, through: members
- has_many :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreigm_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false|
|body|text|null: false|
|image|string|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user
- belomgs_to :group
