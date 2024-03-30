import { Configuration } from '../Configuration.js';
import TexParser from '../TexParser.js';
import { BeginItem, EqnArrayItem } from '../base/BaseItems.js';
import { AmsTags } from '../ams/AmsConfiguration.js';
import { StackItem, CheckType } from '../StackItem.js';
/**
 * The StackItem for the numcases environment.
 */
export declare class CasesBeginItem extends BeginItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * A tagging class for the subnumcases environment.
 */
export declare class CasesTags extends AmsTags {
    /**
     * The counter for the subnumber.
     */
    protected subcounter: number;
    /**
     * @override
     */
    start(env: string, taggable: boolean, defaultTags: boolean): void;
    /**
     * @override
     */
    autoTag(): void;
    /**
     * @override
     */
    formatNumber(n: number, m?: number): string;
}
export declare const CasesMethods: {
    /**
     * Implements the numcases environment.
     *
     * @param {TexParser} texparser   The active tex parser.
     * @param {CasesBeginItem} begin  The environment begin item.
     */
    NumCases(parser: TexParser, begin: CasesBeginItem): EqnArrayItem;
    /**
     * Replacement for & in cases environment.
     */
    Entry(parser: TexParser, name: string): import("ts/input/tex/Types.js").ParseResult;
};
export declare const CasesConfiguration: Configuration;
