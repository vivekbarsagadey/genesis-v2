import AirplayIcon from '@mui/icons-material/Airplay';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Box, Grid, IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import './CollapsibleList.css';

import Link from 'next/link';

function MetaDataSidebar() {
  return (
    <Grid style={{ display: 'flex' }}>
      <ul className="collapsible-list-root">
        <Box
          style={{
            display: 'flex',
            marginLeft: '0.7rem',
            paddingRight: '1rem',
            marginTop: '6rem',
          }}
        >
          <Grid item xs={3}>
            <IconButton>
              <AirplayIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <CollapsibleListItem label="Master Data">
              <ul style={{ listStyle: 'none', marginLeft: '-1.5rem' }}>
                {/* <Link
                  href="/metadata/address"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Address" />
                </Link>

                <Link
                  href="/metadata/country"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Country" />
                </Link>

                <Link
                  href="/metadata/state"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="State" />
                </Link>

                <Link
                  href="/metadata/city"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="City" />
                </Link>

                <Link
                  href="/metadata/pincode"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Pin Code" />
                </Link> */}
              </ul>
            </CollapsibleListItem>
          </Grid>
        </Box>

        <Box
          style={{
            display: 'flex',
            marginLeft: '0.7rem',
            paddingRight: '1rem',
          }}
        >
          <Grid item xs={3}>
            <IconButton>
              <AirplayIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <CollapsibleListItem label="Address">
              <ul style={{ listStyle: 'none', marginLeft: '-1.5rem' }}>
                {/* <Link
                  href="/metadata/address"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Address" />
                </Link> */}

                <Link
                  href="/metadata/country"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Country" />
                </Link>

                <Link
                  href="/metadata/state"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="State" />
                </Link>

                <Link
                  href="/metadata/city"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="City" />
                </Link>

                <Link
                  href="/metadata/pincode"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Pin Code" />
                </Link>
              </ul>
            </CollapsibleListItem>
          </Grid>
        </Box>

        <Box
          style={{
            display: 'flex',
            marginLeft: '0.7rem',
            paddingRight: '1rem',
          }}
        >
          <Grid item xs={3}>
            <IconButton>
              <CoPresentIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <CollapsibleListItem label="Roles">
              <ul style={{ listStyle: 'none', marginLeft: '-1.5rem' }}>
                <Link href="/roles" passHref style={{ textDecoration: 'none' }}>
                  <NormalListItem label="Role" />
                </Link>
              </ul>
            </CollapsibleListItem>
          </Grid>
        </Box>

        <Box
          style={{
            display: 'flex',
            marginLeft: '0.7rem',
            paddingRight: '1rem',
          }}
        >
          <Grid item xs={3}>
            <IconButton>
              <CallToActionIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <CollapsibleListItem label="Dashboard">
              <ul style={{ listStyle: 'none', marginLeft: '-1.5rem' }}>
                <Link
                  href="/metadatadashboard/templates"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Template" />
                </Link>
                <Link
                  href="/metadatadashboard/widgets"
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <NormalListItem label="Widgets" />
                </Link>
              </ul>
            </CollapsibleListItem>
          </Grid>
        </Box>
      </ul>
    </Grid>
  );
}

function NormalListItem(props: any) {
  const { label, style } = props;

  return (
    <li className="normal-list-item" style={style}>
      <button>{label}</button>
    </li>
  );
}

function CollapsibleListItem(props: any) {
  const { label, children } = props;
  const childRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const target = childRef.current;
    if (collapsed) {
      target.style.height = 0;
    } else {
      target.style.height = `${target.scrollHeight}px`;
    }
  }, [collapsed]);

  return (
    <li className="collapsible normal-list-item">
      <button onClick={() => setCollapsed((c) => !c)}>{label}</button>
      <div ref={childRef} className="collapsible-wrapper">
        {children}
      </div>
    </li>
  );
}

export default MetaDataSidebar;
