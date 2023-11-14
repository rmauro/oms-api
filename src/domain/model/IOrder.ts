export interface IOrder {
    readonly processing_rule: string;
    readonly type: string;
    readonly description: string;
    readonly customer_id: string;
    readonly amount: number;
}
