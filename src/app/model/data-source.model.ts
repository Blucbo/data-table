export type Status = 'CREATED' | string;

export interface DataResponse {
  totalPages:    number;
  totalElements: number;
  size:          number;
  content:       Entity[];  
}

export type PageConfig = Pick<DataResponse, 'size' | 'totalElements' | 'totalPages'>

export interface Entity {
  id:               string;
  image:            string | null;
  name:             string;
  audienceType:     string;
  status:           Status;
  organisation:     Organisation;
  region:           string;
  campaignId:       number | null;
  campaignName:     string | null;
  watchers:         string[];
  dueDate:          string | Date | null;
  lastModifiedDate: string | Date;
  lastModifiedBy:   string;
  createdDate:      string | Date;
  createdBy:        string;
  comments:         UserComment[] | null;
  type:             string;
  workOrderId:      number | null;
  sceneCount:       number;
}

export interface Organisation {
  id:   string;
  name: string;
}

export interface UserComment {
  id:          string;
  text:        string;
  createdDate: string | Date;
  createdBy:   string;
}

