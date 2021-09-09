<?php declare(strict_types=1);
/*
 * @author Codesplaza SAR
 * @link   https://codesplaza.com/
 */

namespace Codesplaza\SarTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class CodesplazaSarTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
}
