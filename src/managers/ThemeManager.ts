import { ThemePrepared } from '@fluentui/react-northstar';
import { teamsTheme } from '@fluentui/react-northstar/dist/es/themes/teams';
import { teamsDarkTheme } from "@fluentui/react-northstar/dist/es/themes/teams-dark";
import { teamsHighContrastTheme } from "@fluentui/react-northstar/dist/es/themes/teams-high-contrast";

export class ThemeManager {
    public static getTheme(): ThemePrepared {
        if (document.querySelector('body').classList.contains('valo-theme-dark')) {
            return teamsDarkTheme;
        }
        if (document.querySelector('body').classList.contains('valo-theme-contrast')) {
            return teamsHighContrastTheme;
        }
        return teamsTheme;
    }
}