import axios from "axios";
const backendUrl = `http://localhost:3000/api/v1`;

export const createJobPost = async (JobPostPayload) => {
    try {
        const reqUrl = `${backendUrl}/job/create`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post(reqUrl, JobPostPayload);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const getJobPostById = async (jobPostId) => {
    try {
        const reqUrl = `${backendUrl}/job/job-details/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
    try {
        const reqUrl = `${backendUrl}/job/update/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.put(reqUrl, updatedFormData);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};
