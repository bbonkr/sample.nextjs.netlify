import axios from 'axios';
import { SampleModel } from '../models/Sample';

export const loadData = async (): Promise<SampleModel | null> => {
    const baseUrl = process.env.NEXT_PUBLIC_HOST ?? '';

    return axios
        .get<SampleModel>(`${baseUrl}/api/resume`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
