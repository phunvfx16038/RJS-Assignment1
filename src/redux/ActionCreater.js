import {
  ADD_DEPARTMENT,
  ADD_NEW_STAFF,
  ADD_SALARY_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  DEPARTMENT_FAILED,
  DEPARTMENT_LOADING,
  EDIT_STAFF,
  SALARY_STAFF_FAILED,
  SALARY_STAFF_LOADING,
  SEARCH_VALUE,
  STAFF_FAILED,
  STAFF_LOADING,
} from "./ActionType";
import { baseUrl } from "../Data/baseUrl";

export const searchValueInput = (searchValue) => ({
  type: SEARCH_VALUE,
  payload: searchValue,
});

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error" + response.stattus + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaff(staffs)))
    .catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsLoading = () => ({
  type: STAFF_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: STAFF_FAILED,
  payload: errmess,
});

export const addStaff = (staffs) => ({
  type: ADD_STAFF,
  payload: staffs,
});
export const addNewStaff = (staff) => ({
  type: ADD_NEW_STAFF,
  payload: staff,
});
export const editStaffConfirm = (staff) => ({
  type: EDIT_STAFF,
  payload: staff,
});
export const deleteStaffConfirm = (staff) => ({
  type: DELETE_STAFF,
  payload: staff,
});

export const postStaff =
  (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    image
  ) =>
  (dispatch) => {
    const newStaff = {
      id,
      name,
      doB,
      salaryScale,
      startDate,
      departmentId,
      annualLeave,
      overTime,
      image,
    };
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addNewStaff(response)))
      .catch((error) => {
        alert("New Staff could not be posted\nError: " + error.message);
      });
  };

export const putStaff =
  (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    image
  ) =>
  (dispatch) => {
    const editStaff = {
      id,
      name,
      doB,
      salaryScale,
      startDate,
      departmentId,
      annualLeave,
      overTime,
      image,
    };
    return fetch(baseUrl + "staffs", {
      method: "PATCH",
      body: JSON.stringify(editStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(editStaffConfirm(response)))
      .catch((error) => {
        alert("Staff could not be updated\nError: " + error.message);
      });
  };

export const deleteStaff = (id) => (dispatch) => {
  return fetch(baseUrl + "staffs/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(deleteStaffConfirm(response)))
    .catch((error) => {
      alert("Staff could not be deleted\nError: " + error.message);
    });
};

export const fetchDepartment = () => (dispatch) => {
  dispatch(departmentLoading(true));

  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error" + response.stattus + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartment(departments)))
    .catch((error) => dispatch(departmentFailed(error.message)));
};

export const departmentLoading = () => ({
  type: DEPARTMENT_LOADING,
});

export const departmentFailed = (errmess) => ({
  type: DEPARTMENT_FAILED,
  payload: errmess,
});

export const addDepartment = (departments) => ({
  type: ADD_DEPARTMENT,
  payload: departments,
});

export const fetchSalary = () => (dispatch) => {
  dispatch(staffsSalaryLoading(true));

  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error" + response.stattus + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffsSalary) => dispatch(addStaffsSalary(staffsSalary)))
    .catch((error) => dispatch(staffsSalaryFailed(error.message)));
};

export const staffsSalaryLoading = () => ({
  type: SALARY_STAFF_LOADING,
});

export const staffsSalaryFailed = (errmess) => ({
  type: SALARY_STAFF_FAILED,
  payload: errmess,
});

export const addStaffsSalary = (staffsSalary) => ({
  type: ADD_SALARY_STAFF,
  payload: staffsSalary,
});
