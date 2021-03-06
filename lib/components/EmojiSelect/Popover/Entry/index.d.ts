import { Component, ComponentType, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { EmojiImageProps, EmojiPluginTheme } from '../../../../index';
interface EntryProps {
    isFocused?: boolean;
    mouseDown?: boolean;
    theme: EmojiPluginTheme;
    emoji: string;
    checkMouseDown(): boolean;
    onEmojiSelect(emoji: string): void;
    onEmojiMouseDown?(entryComponent: Entry, toneSet: string[] | null): void;
    toneSet?: string[] | null;
    emojiImage: ComponentType<EmojiImageProps>;
}
export default class Entry extends Component<EntryProps> {
    static propTypes: {
        theme: PropTypes.Validator<object>;
        emoji: PropTypes.Validator<string>;
        mouseDown: PropTypes.Requireable<boolean>;
        checkMouseDown: PropTypes.Validator<(...args: any[]) => any>;
        onEmojiSelect: PropTypes.Validator<(...args: any[]) => any>;
        onEmojiMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        mouseDown: boolean;
    };
    state: {
        isFocused: boolean;
    };
    button?: HTMLButtonElement | null;
    onMouseUp: () => void;
    onMouseDown: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    deselect: () => void;
    mouseDown: boolean | undefined;
    render(): ReactElement;
}
export {};
