import React from 'react';
import {
    createModuleLoader,
    createModuleFetcher,
    useModuleMounter,
    MountableModule,
} from '@alfalab/scripts-modules';

const loader = createModuleLoader({
    hostAppId: 'host',
    moduleId: 'SuperModule',
    getModuleResources: createModuleFetcher({
        baseUrl: 'http://localhost:8080/remote',
    }),
});

export const App = () => {
    const { loadingState, targetElementRef } = useModuleMounter({ loader });
    return (
        <div>
            {loadingState === 'pending' && <div>pending...</div>}
            {loadingState === 'rejected' && <div>Error</div>}
            <div ref={targetElementRef} /> {/* сюда будет монтироваться модуль */}
        </div>
    );
};
