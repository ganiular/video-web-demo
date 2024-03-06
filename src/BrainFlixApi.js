import axios from "axios";

class BrainFlixApi {
    constructor(api_key) {
        this.api_key = api_key;
        this.base_url = 'http://127.0.0.1:8080';
        // this.base_url = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
    }

    async getVideos() {
        try {
            const res = await axios.get(`${this.base_url}videos?api_key=${this.api_key}`)
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getVideoById(videoId) {
        try {
            const res = await axios.get(`${this.base_url}videos/${videoId}?api_key=${this.api_key}`)
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async postVideo(video) {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const res = await axios.post(`${this.base_url}videos?api_key=${this.api_key}`, video, { headers })
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async postComment(videoId, comment) {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const res = await axios.post(`${this.base_url}videos/${videoId}/comments?api_key=${this.api_key}`, comment, { headers })
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteComment(videoId, commentId) {
        try {
            const res = await axios.delete(`${this.base_url}videos/${videoId}/comments/${commentId}?api_key=${this.api_key}`)
            return res.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

const siteApi = new BrainFlixApi('51352841-4603-45f1-bd56-9f0fd6dd9391');
export default siteApi;