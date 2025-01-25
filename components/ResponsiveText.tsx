import styles from './styles/text.module.css';

interface ResponsiveTextProps {
    children: React.ReactNode;
    className?: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ children, className }) => {
    return (
        <div className={`${styles.container} ${className || ''}`}>
            <div className={`${styles.textBlock}`}>
                {children}
            </div>
        </div>
    );
};

export default ResponsiveText;