
/assets/IT Man - Intro.mp4
background: true

---

/assets/New content every Sunday.mp4
background: true

---

#### Tech #32
### Async await wrapper for easy error handling without try-catch
/assets/Clipboard_1.png
size: contain

---
#### Tech #32
# Why
```typescript
async function asyncTask() {
    try {
       const user = await UserModel.findById(1);
       if(!user) throw new Error('No user found');
    } catch(e) {
       throw new error('Unexpected error occurred');
    }

    try {
       const savedTask = await TaskModel({userId: user.id, name: 'Demo Task'});
    } catch(e) {
        throw new Error('Error occurred while saving task');
    }

    if(user.notificationsEnabled) {
        try {
            await NotificationService.sendNotification(user.id, 'Task Created');  
        } catch(e) {
            throw new Error('Error while sending notification');
        }
    }

    if(savedTask.assignedUser.id !== user.id) {
        try {
            await NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you');
        } catch(e) {
            throw new Error('Error while sending notification');
        }
    }

    return savedTask
}
```

---

#### Tech #32
### Async await wrapper
# [await-to-js](https://github.com/scopsy/await-to-js)

/assets/Clipboard_2.png
---

#### Tech #32
### Usage
```typescript
import to from 'await-to-js';

async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found'); 
}
```

---

https://youtu.be/jhz8EhETkZ8

https://youtu.be/ujJlZi0IzI8
---

# Thank you
/assets/IT Man Main Logo 800x600.png
## [https://bitly.com/m/itman](https://bitly.com/m/itman)