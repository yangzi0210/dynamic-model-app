import { API_PREFIX } from '@/const';
import { request } from '@umijs/max';
export const fetchTable = async (params: any) => request(`${API_PREFIX}/admins`, { params });
