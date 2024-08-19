export interface AddTaskModel{
    title: string;
    description?: string;
    priority: number;
    state: number;
    bucketId: number;
    assignees?: string[];
    commnents?: string[];
}
