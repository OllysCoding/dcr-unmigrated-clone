import React from 'react';
import { css, cx } from 'emotion';

import { visuallyHidden } from '@guardian/src-foundations/accessibility';
import { Pillars } from '@root/src/web/components/Pillars';
import { GuardianRoundel } from '@root/src/web/components/GuardianRoundel';
import { space } from '@guardian/src-foundations';
import { until } from '@guardian/src-foundations/mq';
import { ThemeProvider } from 'emotion-theming';
import { Button, buttonReaderRevenueBrand } from '@guardian/src-button';
import { SvgArrowRightStraight } from '@guardian/src-svgs';

import { Hide } from '@frontend/web/components/Hide';

import { clearFix } from '@root/src/lib/mixins';

import { ExpandedMenu } from './ExpandedMenu/ExpandedMenu';

type Props = {
    pillar: Pillar;
    nav: NavType;
    display: Display;
    subscribeUrl: string;
    edition: Edition;
};

const clearFixStyle = css`
    ${clearFix};
`;

const rowStyles = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const minHeight = css`
    min-height: 48px;
`;

const PositionRoundel = ({ children }: { children: React.ReactNode }) => (
    <div
        className={css`
            margin-top: 3px;
            z-index: 2;

            ${until.desktop} {
                margin-right: 51px;
            }

            margin-right: 24px;
        `}
    >
        {children}
    </div>
);

<<<<<<< HEAD
type Props = {
    pillar: Pillar;
    nav: NavType;
    display: Display;
};

// The checkbox ID is used as a CSS selector to enable NoJS support
const menuCheckboxId = 'main-menu-toggle';

const mainMenuId = 'main-menu';

export const Nav = ({ display, pillar, nav }: Props) => (
    <div className={rowStyles}>
        <nav
            className={cx(clearFixStyle, rowStyles)}
            role="navigation"
            aria-label="Guardian sections"
            data-component="nav2"
        >
            {/*
                IMPORTANT NOTE:
                It is important to have the input as the 1st sibling for NoJS to work
                as we use ~ to apply certain styles on checkbox checked and ~ can only
                apply to styles with elements that are preceded
            */}
            <input
                type="checkbox"
                className={css`
                    ${visuallyHidden};
                `}
                id={menuCheckboxId}
                name="more"
                tabIndex={-1}
                key="OpenExpandedMenuCheckbox"
                role="menuitemcheckbox"
                aria-checked="false"
            />
            <Pillars
                display={display}
                menuCheckboxId={menuCheckboxId}
                pillars={nav.pillars}
                pillar={pillar}
                dataLinkName="nav2"
            />
            <ExpandedMenu
                display={display}
                id={mainMenuId}
                nav={nav}
                menuCheckboxId={menuCheckboxId}
            />
        </nav>
        {display === 'immersive' && (
            <PositionRoundel>
                <GuardianRoundel />
            </PositionRoundel>
        )}
    </div>
);
=======
const PositionButton = ({ children }: { children: React.ReactNode }) => (
    <div
        className={css`
            margin-top: ${space[1]}px;
            margin-left: ${space[2]}px;
        `}
    >
        {children}
    </div>
);

export const Nav = ({ display, pillar, nav, subscribeUrl, edition }: Props) => {
    const [showExpandedMenu, toggleExpandedMenu] = useState<boolean>(false);
    const mainMenuId = 'main-menu';

    return (
        <div className={rowStyles}>
            <nav
                className={cx(
                    clearFixStyle,
                    rowStyles,
                    display === 'immersive' && minHeight,
                )}
                role="navigation"
                aria-label="Guardian sections"
                data-component="nav2"
            >
                <Hide when="above" breakpoint="tablet">
                    <ThemeProvider theme={buttonReaderRevenueBrand}>
                        <PositionButton>
                            <Button
                                priority="primary"
                                size="small"
                                iconSide="right"
                                icon={<SvgArrowRightStraight />}
                                data-link-name="nav2 : support-cta"
                                data-edition={edition}
                                onClick={() => {
                                    window.location.href = subscribeUrl;
                                    return false;
                                }}
                            >
                                Subscribe
                            </Button>
                        </PositionButton>
                    </ThemeProvider>
                </Hide>
                <Pillars
                    display={display}
                    mainMenuOpen={showExpandedMenu}
                    pillars={nav.pillars}
                    pillar={pillar}
                    dataLinkName="nav2"
                />
                <ExpandedMenu
                    display={display}
                    id={mainMenuId}
                    nav={nav}
                    showExpandedMenu={showExpandedMenu}
                    toggleExpandedMenu={toggleExpandedMenu}
                />
            </nav>
            {display === 'immersive' && (
                <PositionRoundel>
                    <GuardianRoundel />
                </PositionRoundel>
            )}
        </div>
    );
};
>>>>>>> ca6676aecc9479837d49506b7daa4836f4df219e
