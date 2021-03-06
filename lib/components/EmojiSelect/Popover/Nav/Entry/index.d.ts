import { Component, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { EmojiPluginTheme } from '../../../../../index';
interface EntryParams {
    theme: EmojiPluginTheme;
    icon: ReactNode;
    groupIndex: number;
    isActive: boolean;
    onGroupSelect(index: number): void;
}
export default class Entry extends Component<EntryParams> {
    static propTypes: {
        theme: PropTypes.Validator<object>;
        icon: PropTypes.Validator<string | PropTypes.ReactElementLike>;
        groupIndex: PropTypes.Validator<number>;
        isActive: PropTypes.Requireable<boolean>;
        onGroupSelect: PropTypes.Validator<(...args: any[]) => any>;
    };
    static defaultProps: {
        isActive: boolean;
    };
    mouseDown: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
    render(): ReactElement;
}
export {};
