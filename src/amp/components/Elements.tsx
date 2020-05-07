import React from 'react';

import { AtomEmbedMarkupBlockComponent } from '@root/src/amp/components/elements/AtomEmbedMarkupBlockComponent';
import { AtomEmbedUrlBlockComponent } from '@root/src/amp/components/elements/AtomEmbedUrlBlockComponent';
import { AudioAtomBlockComponent } from '@root/src/amp/components/elements/AudioAtomBlockComponent';
import { CommentBlockComponent } from '@root/src/amp/components/elements/CommentBlockComponent';
import { ContentAtomBlockComponent } from '@root/src/amp/components/elements/ContentAtomBlockComponent';
import { DisclaimerBlockComponent } from '@root/src/amp/components/elements/DisclaimerBlockComponent';
import { EmbedBlockComponent } from '@root/src/amp/components/elements/EmbedBlockComponent';
import { Expandable } from '@root/src/amp/components/Expandable';
import { GuVideoBlockComponent } from '@root/src/amp/components/elements/GuVideoBlockComponent';
import { ImageBlockComponent } from '@root/src/amp/components/elements/ImageBlockComponent';
import { InstagramBlockComponent } from '@root/src/amp/components/elements/InstagramBlockComponent';
import { PullquoteBlockComponent } from '@root/src/amp/components/elements/PullquoteBlockComponent';
import { MapBlockComponent } from '@root/src/amp/components/elements/MapBlockComponent';
import { RichLinkBlockComponent } from '@root/src/amp/components/elements/RichLinkBlockComponent';
import { SoundcloudBlockComponent } from '@root/src/amp/components/elements/SoundcloudBlockComponent';
import { SubheadingBlockComponent } from '@root/src/amp/components/elements/SubheadingBlockComponent';
import { TextBlockComponent } from '@root/src/amp/components/elements/TextBlockComponent';
import { TimelineBlockComponent } from '@root/src/amp/components/elements/TimelineBlockComponent';
import { TwitterBlockComponent } from '@root/src/amp/components/elements/TwitterBlockComponent';
import { VideoFacebookBlockComponent } from '@root/src/amp/components/elements/VideoFacebookBlockComponent';

import { VideoYoutube } from '@root/src/amp/components/elements/VideoYoutube';
import { VideoVimeo } from '@root/src/amp/components/elements/VideoVimeo';

import { clean } from '@root/src/model/clean';

import { YoutubeVideo } from '@root/src/amp/components/elements/YoutubeVideo';

export const Elements = (
    elements: CAPIElement[],
    pillar: Pillar,
    isImmersive: boolean,
    adTargeting?: AdTargeting,
): JSX.Element[] => {
    const cleanedElements = elements.map(element =>
        'html' in element ? { ...element, html: clean(element.html) } : element,
    );
    const output = cleanedElements.map((element, i) => {
        switch (element._type) {
            case 'model.dotcomrendering.pageElements.AtomEmbedMarkupBlockElement':
                return (
                    <AtomEmbedMarkupBlockComponent
                        html={element.html}
                        styles={element.css}
                        js={element.js}
                    />
                );
            case 'model.dotcomrendering.pageElements.AtomEmbedUrlBlockElement':
                return <AtomEmbedUrlBlockComponent url={element.url} />;
            case 'model.dotcomrendering.pageElements.AudioAtomBlockElement':
                return <AudioAtomBlockComponent element={element} />;
            case 'model.dotcomrendering.pageElements.BlockquoteBlockElement':
                return (
                    <TextBlockComponent
                        key={i}
                        html={element.html}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.CommentBlockElement':
                return <CommentBlockComponent key={i} element={element} />;
            case 'model.dotcomrendering.pageElements.ContentAtomBlockElement':
                return <ContentAtomBlockComponent element={element} />;
            case 'model.dotcomrendering.pageElements.DisclaimerBlockElement':
                return (
                    <DisclaimerBlockComponent
                        key={i}
                        html={element.html}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.EmbedBlockElement':
                return <EmbedBlockComponent key={i} element={element} />;
            case 'model.dotcomrendering.pageElements.GuideBlockElement':
                return (
                    <Expandable
                        id={element.id}
                        type={element.label}
                        title={element.title}
                        html={element.html}
                        img={element.img}
                        credit={element.credit}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.GuVideoBlockElement':
                return (
                    <GuVideoBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.ImageBlockElement':
                return (
                    <ImageBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.InstagramBlockElement':
                return <InstagramBlockComponent key={i} element={element} />;
            case 'model.dotcomrendering.pageElements.MapBlockElement':
                return (
                    <MapBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.ProfileBlockElement':
                return (
                    <Expandable
                        id={element.id}
                        type={element.label}
                        title={element.title}
                        html={element.html}
                        img={element.img}
                        credit={element.credit}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.PullquoteBlockElement':
                return (
                    <PullquoteBlockComponent
                        key={i}
                        html={element.html}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.QABlockElement':
                return (
                    <Expandable
                        id={element.id}
                        type="Q&A"
                        title={element.title}
                        html={element.html}
                        img={element.img}
                        credit={element.credit}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.RichLinkBlockElement':
                return (
                    <RichLinkBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.SoundcloudBlockElement':
                return <SoundcloudBlockComponent key={i} element={element} />;
            case 'model.dotcomrendering.pageElements.SubheadingBlockElement':
                return (
                    <SubheadingBlockComponent
                        key={i}
                        html={element.html}
                        pillar={pillar}
                        isImmersive={isImmersive}
                    />
                );
            case 'model.dotcomrendering.pageElements.TextBlockElement':
                return (
                    <TextBlockComponent
                        key={i}
                        html={element.html}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.TimelineBlockElement':
                return (
                    <TimelineBlockComponent
                        id={element.id}
                        title={element.title}
                        description={element.description}
                        events={element.events}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.TweetBlockElement':
                return (
                    <TwitterBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.VideoFacebookBlockElement':
                return (
                    <VideoFacebookBlockComponent
                        key={i}
                        element={element}
                        pillar={pillar}
                    />
                );
            case 'model.dotcomrendering.pageElements.VideoVimeoBlockElement':
                return <VideoVimeo key={i} element={element} pillar={pillar} />;
            case 'model.dotcomrendering.pageElements.VideoYoutubeBlockElement':
                return (
                    <VideoYoutube key={i} element={element} pillar={pillar} />
                );
            case 'model.dotcomrendering.pageElements.YoutubeBlockElement':
                return (
                    <YoutubeVideo
                        element={element}
                        pillar={pillar}
                        adTargeting={adTargeting}
                    />
                );
            default:
                // eslint-disable-next-line no-console
                console.log('Unsupported Element', JSON.stringify(element));
                if ((element as { isMandatory?: boolean }).isMandatory) {
                    throw new Error(
                        'This page cannot be rendered due to incompatible content that is marked as mandatory.',
                    );
                }
                return null;
        }
    });

    return output.filter(el => el !== null) as JSX.Element[];
};
