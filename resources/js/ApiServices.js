import axios from "axios";
const URL = "http://127.0.0.1:8000/api";

export class APIService {
  constructor() {}
//   login(account) {
//     const url = "http://localhost:8089/api/users/login";
//     return axios
//       .post(url, account)
//       .catch(error => new Promise((resolve, reject) => reject(error)));
//   }

//   addStrategy(data) {
//     return axios.post(`${URL}/strategies`, data);
//   }

  getTodos() {
    return axios.get(
      `${URL}/todos`
    );
    
  }
  searchTodo(id){
      console.log(`${URL}/todos/${id}`);
    return axios.get(
        `${URL}/todos/${id}`
      ); 
  }
  makeTodos(data) {
    return axios.post(
      `${URL}/todos` , data
    );
    
  }
  updateTodos(data) {
    console.log(data);
    return axios.put(
      `${URL}/todos/${data.id}` , data 
    );
  }


//   addAnnualPlan(data, token) {
//     return axios.post(`${URL}/annualPlans?access_token=${token}`, data);
//   }

//   getAnnualPlan(token) {
//     return axios.get(`${URL}/annualPlans?access_token=${token}`);
//   }

//   addAnnualPerspective(data, token) {
//     return axios.post(`${URL}/annualPrespectives?access_token=${token}`, data);
//   }

//   async getAnnualPerspective(token) {
//     let response = await axios.get(
//       `${URL}/annualPrespectives?access_token=${token}`
//     );
//     return response;
//   }
//   addPerspective(data, token) {
//     return axios.post(`${URL}/perspectives?access_token=${token}`, data);
//   }

//   getPerspective(token) {
//     return axios.get(`${URL}/perspectives?access_token=${token}`);
//   }
//   addGoal(data, token) {
//     return axios.post(`${URL}/Goals?access_token=${token}`, data);
//   }

//   getGoal(token) {
//     return axios.get(`${URL}/Goals?access_token=${token}`);
//   }

//   addTask(data, token) {
//     return axios.post(`${URL}/Tasks?access_token=${token}`, data);
//   }

//   getTask(token) {
//     return axios.get(`${URL}/Tasks?access_token=${token}`);
//   }

//   getPersonalTask(token, userId, annId) {
//     return axios.get(
//       `${URL}/Tasks/personalTasks?filter=${annId}&access_token=${token}`,
//       userId
//     );
//   }

//   getAllocatedTask(token, userId, annId) {
//     return axios.get(
//       `${URL}/Tasks/detailedTasks?access_token=${token}`,
//       userId,
//       annId
//     );
//   }

//   getMajorTask(token, userId, annId) {
//     return axios.get(
//       `${URL}/Tasks/allocatedTasks?access_token=${token}`,
//       userId,
//       annId
//     );
//   }
//   getTaskByPid(token, pid) {
//     return axios.get(
//       `${URL}/Tasks?"where"="parentTaskId" : "${pid}"&access_token=${token}`
//     );
//   }
//   getOfficeEmp(token, officeId) {
//     return axios.get(
//       `${URL}/offices/${officeId}/organization/users?access_token=${token}`
//     );
//   }

//   getEmployees() {
//     let filter = {
//       include: { jobs: "office" }
//     };
//     filter = JSON.stringify(filter);
//     console.log(filter);
//     return axios.get(
//       `${URL}/organizations/5e3d2c7389db0c0b20643098/users?filter=${filter}`
//     );
//   }
//   addEmployee(data) {
//     return axios.post(
//       `${URL}/organizations/5e3d2c7389db0c0b20643098/users`,
//       data
//     );
//   }
//   uploadSheet(file, organizationId) {
//     let form = new FormData();
//     form.append("file", file);
//     console.log(form.keys());
//     fetch(`${URL}/organizations/${organizationId}/import/employees`, {
//       method: "post",
//       body: form
//     });
//     // return axios
//     //   .post(`${URL}/containers/upload/upload`, file)
//     //   .catch(err => console.log(err));
//   }
//   getOffices(orgId, token, filter) {
//     if (filter) {
//       // filter = JSON.stringify(filter);
//       // return axios.get(
//       //   `${URL}/organizations/${orgId}/offices?access_token=${token}&filter=${filter}`
//       // );
//     }
//     return axios.get(
//       `${URL}/organizations/${orgId}/offices?access_token=${token}`
//     );
//   }
//   getOffice(orgId, token, officeId) {
//     return axios.get(
//       `${URL}/organizations/${orgId}/offices?"where"="parentId" : "${officeId}"?access_token=${token}`
//     );
//   }

//   addOffice(name, organizationId, headId, employees, token) {
//     return axios.post(`${URL}/offices/addOffice?access_token=${token}`, {
//       office: { name, organizationId, headId },
//       employees
//     });
//   }
//   attachOff(usrId, offId, token) {
//     return axios.post(
//       `${URL}/users/${usrId}/attachOFF/${offId}?access_token=${token}`
//     );
//   }
//   setHead(usrId, office, token) {
//     return axios.put(`${URL}/users/${usrId}/?access_token=${token}`, {
//       officeId: office.id
//     });
//   }
//   addChild(office, children, token) {
//     let { id } = office;
//     return axios.post(
//       `${URL}/offices/${id}/addChildren?access_token=${token}`,
//       children
//     );
//   }
//   addDraft(token, data) {
//     return axios.post(`${URL}/draftPlans/?access_token=${token}`, data);
//   }
//   getTaskById(token, id) {
//     return axios.get(`${URL}/Tasks/${id}?access_token=${token}`);
//   }

//   approve(id, token, status, type, weight) {
//     return axios.post(
//       `${URL}/requests/approveRequest?access_token=
//     ${token}`,
//       id,
//       status,
//       type,
//       weight
//     );
//   }

//   approveDraft(id, token, data) {
//     return axios.get(`${URL}/draftPlans/${id}?access_token=${token}`, data);
//   }
//   getDrafts(token) {
//     return axios.get(`${URL}/draftPlans?access_token=${token}`);
//   }
//   getProfile(token) {
//     return axios.get(`${URL}/profiles?access_token=${token}`);
//   }
//   updateProfile(data, token) {
//     return axios.patch(`${URL}/profiles?access_token=${token}`, data);
//   }
//   setNotification(data, token, UserId) {
//     return axios.post(
//       `${URL}/users/${UserId}/notification?access_token=${token}`,
//       data
//     );
//   }
//   getTasks(UserId, token, annualId) {
//     return axios.get(
//       `${URL}/Tasks/${UserId}?filter[where][annualPlanId]=${annualId}?access_token=${token}`
//     );
//   }
//   getOrganization(token, orgId) {
//     return axios.get(`${URL}/organizations/${orgId}?access_token=${token}`);
//   }
//   getActiveTasks(token, userId, annualId) {
//     return axios.get(
//       `/Tasks/activeTasks?userId=${userId}&annualId=${annualId}&access_token=${token}`
//     );
//   }
//   getFailedTasks(token, userId, annualId) {
//     return axios.get(
//       `/Tasks/failedTasks?userId=${userId}&annualId=${annualId}&access_token=${token}`
//     );
//   }
//   getReassignedTasks(token, userId, annualId) {
//     return axios.get(
//       `/Tasks/reassignedTasks?userId=${userId}&annualId=${annualId}&access_token=${token}`
//     );
//   }
}
