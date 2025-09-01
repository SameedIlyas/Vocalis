"use client";

import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { WidgetAuthScreen } from "../screens/widgetAuthScreen";
import { organizationIdAtom, screenAtom } from "../../atoms/widgetAtoms";
import { WidgetErrorScreen } from "../screens/widgetErrorScreen";
import { WidgetLoadingScreen } from "../screens/widgetLoadingScreen";
import { WidgetSelectionScreen } from "../screens/widgetSelectionScreen";
import { WidgetChatScreen } from "../screens/widgetChatScreen";
import { WidgetInboxScreen } from "../screens/widgetInboxScreen";

interface Props {
    organizationId: string | null;
};

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);
    const setOrganizationId = useSetAtom(organizationIdAtom);

    useEffect(() => {
        if (organizationId) {
            setOrganizationId(organizationId);
        }
    }, [organizationId, setOrganizationId]);

    const screenComponents = {
        error: <WidgetErrorScreen />,
        loading: <WidgetLoadingScreen organizationId={organizationId} />,
        auth: <WidgetAuthScreen />,
        voice: <p>TODO: Voice</p>,
        inbox: <WidgetInboxScreen />,
        selection: <WidgetSelectionScreen />,
        chat: <WidgetChatScreen />,
        contact: <p>TODO: Contact</p>,
    };

    return (
        <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
            {screenComponents[screen]}
        </main>
    )
}