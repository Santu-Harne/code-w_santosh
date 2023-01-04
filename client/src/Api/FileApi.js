import axios from 'axios'

const axiosIns = axios.create({
    baseURL: 'http://localhost:3000'
})

const FileApi = {
    storeFile: (file) => {
        return axiosIns.request({
            url: '/auth/file/upload',
            method: "POST",
            data: file,
            headers: { "Content-Type": "multipart/form-data" }
        })
    }
}

export default FileApi


