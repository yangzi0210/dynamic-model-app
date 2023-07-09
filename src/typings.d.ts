declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

declare namespace BasicListApi {
  type Page = {
    title: string;
    type: string;
    searchBar: boolean;
    trash: boolean;
  };

  type Datum = {
    id: number;
    parent_id: number;
    name: string;
    create_time: Date;
    delete_time?: any;
    status: number;
    value: any;
    title: string;
    depth: number;
  };

  type Action = {
    component: string;
    text: string;
    type: string;
    action: string;
    uri: string;
    method: string;
  };

  type TableColumn = {
    title: string;
    dataIndex: string;
    key: string;
    type?: string;
    data?: Datum[];
    hideInColumn?: boolean;
    sorter?: boolean;
    mode?: string;
    actions?: Action[];
    [key: string]: any;
  };

  type TableToolBar = {
    component: string;
    text: string;
    type: string;
    action: string;
    id: string;
    uri: string;
  };

  type BatchToolBar = {
    component: string;
    text: string;
    type: string;
    action: string;
    uri: string;
    method: string;
  };

  type Layout = {
    tableColumn: TableColumn[];
    tableToolBar: Action[];
    batchToolBar: Action[];
  };

  type Pivot = {
    id: number;
    admin_id: number;
    group_id: number;
    create_time: string;
    update_time: string;
    delete_time?: any;
    status: number;
  };

  type Group = {
    id: number;
    parent_id: number;
    name: string;
    create_time: Date;
    update_time: Date;
    delete_time?: any;
    status: number;
    pivot: Pivot;
  };

  type DataSource = {
    id: number;
    username: string;
    display_name: string;
    create_time: Date;
    delete_time?: any;
    status: number;
    groups: Group[];
  };

  type Meta = {
    total: number;
    per_page: number;
    page: number;
  };

  type Data = {
    page: Page;
    layout: Layout;
    dataSource: DataSource[];
    meta: Meta;
  };

  type RootObject = {
    success: boolean;
    message: string;
    data: Data;
  };
}

declare namespace PageApi {
  type Page = {
    title: string;
    type: string;
  };

  type Datum2 = {
    id: number;
    parent_id: number;
    name: string;
    create_time: Date;
    delete_time?: any;
    status: number;
    value: number;
    title: string;
    depth: number;
  };

  type Datum = {
    title: string;
    dataIndex: string;
    key: string;
    type: string;
    disabled: boolean;
    data: Datum2[];
  };

  type Tab = {
    name: string;
    title: string;
    data: Datum[];
  };

  type Datum3 = {
    component: string;
    text: string;
    type: string;
    action: string;
    uri: string;
    method: string;
  };

  type Action = {
    name: string;
    title: string;
    data: Datum3[];
  };

  type Layout = {
    tabs: Tab[];
    actions: Action[];
  };

  type DataSource = {
    id: number;
    username: string;
    display_name: string;
    create_time: Date;
    update_time: Date;
    status: number;
    groups: number[];
  };

  type Data = {
    page: Page;
    layout: Layout;
    dataSource: DataSource;
  };

  type RootObject = {
    success: boolean;
    message: string;
    data: Data;
  };
}
