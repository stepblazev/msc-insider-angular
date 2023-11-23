<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
    die();

if (!CModule::IncludeModule("iblock")) {
    return;
}

if (empty($arParams['ELEMENT_ID'])) {
    ShowError('Видео не найдено');
    return;
}

$videoID = $arParams['ELEMENT_ID'];
$fetcher = CIBlockElement::GetByID($videoID);

if ($response = $fetcher->GetNextElement()) {
    $arResult = $response->GetFields();
    $arResult['PROPERTIES'] = $response->GetProperties();
    $arResult['PROPERTIES']['preview']['VALUE'] = CFile::GetFileArray($arResult['PROPERTIES']['preview']['VALUE']);

    $video_parts = parse_url($arResult['PROPERTIES']['link']['VALUE']);
    parse_str($video_parts['query'], $query);

    if (isset($query['v'])) {
        $arResult['PROPERTIES']['link']['VALUE'] = "https://www.youtube-nocookie.com/embed/" . $query['v'];
        $this->IncludeComponentTemplate();
    } else {
        ShowError("Идентификатор видео не найден");
    }
} else {
    ShowError('Произошла ошибка');
}
?>